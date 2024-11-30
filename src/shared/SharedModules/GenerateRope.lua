--[[
    Bezier

    This module is packed with functions that generates a curve through control points.
    The module also includes constant travel speeds

    Massive credits to this video: https://www.youtube.com/watch?v=am-K2Gn2GTg
]]
local playerVars = require(game.Players.LocalPlayer.PlayerScripts:WaitForChild("playerVars")).playerVars
local module = {}
module.segmentLength = 4 -- length of rope segments (or something like that). lower number = smoother curve, less performance (dont change to imitate fe2)
module.characterUpdateTime = 0.01 -- time in seconds between every character position update when ziplining

function lerp(a, b, c)
	return a + (b - a) * c
end

function module:getBezierPosition(t, ...)
	local points = {...}
	while #points > 1 do
		for i = 1, #points - 1 do
			points[i] = lerp(points[i], points[i + 1], math.clamp(t, 0, 1))
		end

		points[#points] = nil
	end
	return points[1]
end

-- get total distance of line between all points
function module:getArcLength(points)
	local lookup = createLookup(unpack(points))
	return lookup[#lookup]
end

-- get table of distances between bezier points
function createLookup(...)
	local distSum = 0

	local sums = {}
	local step = 1 / 100

	for i = 0, 1, step do
		local firstPoint = module:getBezierPosition(i, ...)
		local secondPoint = module:getBezierPosition(i + step, ...)
		local dist = (secondPoint - firstPoint).Magnitude
		table.insert(sums, distSum)
		distSum += dist
	end

	return sums
end

-- idk
function remap(n, oldMin, oldMax, min, max)
	return (min + ((max-min) * ((n - oldMin) / (oldMax - oldMin))))
end

-- uniformly distribute points in bezier curve (so they're not bunched up at the ends). this makes zipline speed constant throughout
function module:getUniformBezierPosition(unclampedT, ...)
	local t = math.clamp(unclampedT, 0, 1)
	local lookup = createLookup(...)
	local arcLength = lookup[#lookup]
	local targetDist = arcLength * t
	for i, dist in ipairs(lookup) do
		local nextDist = lookup[i + 1]

		if dist and nextDist and targetDist >= dist and targetDist < nextDist then
			local uniformlyAdjustedT = remap(targetDist, dist, nextDist, i / #lookup, (i + 1) / #lookup)
			return module:getBezierPosition(uniformlyAdjustedT, ...)
		end
	end
end

-- sort table of points from rope into numerical order
function module:sortPoints(points)
	table.sort(points, function(a, b)
		local point = tonumber(string.sub(a.Name, 6))
		local nextPoint = tonumber(string.sub(b.Name, 6))

		if point and nextPoint then
			return point < nextPoint
		end
	end)
end

-- make rope segment part in map
function module:drawRope(point, nextPoint, parent)
	local rope = Instance.new("Part")
	local distance = (point - nextPoint).Magnitude + 0.02

	rope.Name = "Rope"
	rope.Anchored = true
	rope.CanCollide = false
	rope.Size = Vector3.new(0.3, 0.3, distance)
	rope.CFrame = CFrame.lookAt(point, nextPoint) * CFrame.new(0, 0, -distance / 2)
	rope.BrickColor = BrickColor.new("Black")
	rope.Material = Enum.Material.Fabric
	rope.Parent = parent

	return rope
end

-- calculate rope curves n shi
function module:createRope(parent, pointPositions, ropeLength)
	local step = 1 / math.floor(ropeLength / module.segmentLength)

	for i = 0, 1, step do
		local point = module:getBezierPosition(i, unpack(pointPositions))
		local nextPoint = module:getBezierPosition(i + step, unpack(pointPositions))

		module:drawRope(point, nextPoint, parent)
	end
end

function module:createOrb(name, material, color, point)
	local orb = Instance.new("Part")

	orb.Name = name
	orb.Anchored = true
	orb.CanCollide = false
	orb.Shape = "Ball"
	orb.Material = material or "Neon"
	orb.Size = Vector3.new(3.75, 3.75, 3.75)
	orb.CFrame = point.CFrame + Vector3.new(0, 0.25, 0)
	orb.Color = color
	orb.Transparency = 0.75
	orb.Parent = point.Parent

	return orb
end

function module.renderRope(pointsModel)
	local points = {}
	local pointPositions = {}
	for i,v in next, pointsModel:GetChildren() do
		if string.find(v.Name, "Point") then
			v.Transparency = 1
			table.insert(points, v)
		end
	end

	module:sortPoints(points)
	for i = 1, #points do
		table.insert(pointPositions, points[i].Position)
	end

	local ropeLength = module:getArcLength(pointPositions)
	local rope = Instance.new("Folder")
	rope.Name = "Rope"
	rope.Parent = pointsModel

	module:createRope(rope, pointPositions, ropeLength)
	local orb = module:createOrb("StartOrb", nil, Color3.fromRGB(0, 255, 0), points[1])

	playerVars.ziplining = false
	orb.Touched:Connect(function(part)
		if not playerVars.ziplining and part.Parent and part.Name == "HumanoidRootPart" and part.Parent:FindFirstChild("Humanoid").Health >= 0 then
			playerVars.ziplining = true
			local hrp = part
			hrp.Anchored = true
			hrp.Parent:FindFirstChild("Animate"):WaitForChild("Swinging"):Fire(true)

			local attr = pointsModel:GetAttributes()
			local speed = attr.RopeSpeed or 100
			local velocityInheritance = attr.VelocityInheritance or 0
			local inheritanceDuration = (attr.InheritanceDuration or 0) * 0.01

			local ropeRideTime = ropeLength / speed
			local steps = ropeRideTime / module.characterUpdateTime
			local newCFrame
			for t = 0, 0.999, 1 / steps do
				local position = module:getUniformBezierPosition(t, unpack(pointPositions))
				local lookAt = module:getUniformBezierPosition(t + 0.001, unpack(pointPositions)) -- look at slightly ahead position
				newCFrame = CFrame.lookAt(position, lookAt) + Vector3.new(0, -2.8, 0) -- fix position
				hrp.CFrame = newCFrame
				task.wait(module.characterUpdateTime)
			end

			hrp.Parent:FindFirstChild("Animate"):WaitForChild("Swinging"):Fire(false)
			playerVars.ziplining = false
			hrp.Anchored = false

			if (velocityInheritance > 0) then
				hrp.AssemblyLinearVelocity = newCFrame.LookVector * speed
				if inheritanceDuration > 0 then
					local startTime = tick()
					while (tick() - startTime < inheritanceDuration) do
						hrp.AssemblyLinearVelocity = newCFrame.LookVector * speed
						task.wait()
					end
				end
			end
		end
	end)
end

return module