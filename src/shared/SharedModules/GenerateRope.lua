--[[
    Bezier
    
    This module is packed with functions that generates a curve through control points.
    The module also includes constant travel speeds
    
    Massive credits to this video: https://www.youtube.com/watch?v=am-K2Gn2GTg
]]

local module = {}
module.segments = 8.75

function lerp(a, b, c)
	return a + (b - a) * c
end

function module:getBezierPosition(t, ...)
	local points = {...}

	while #points > 1 do
		for i = 1, #points - 1 do
			points[i] = lerp(points[i], points[i + 1], t)
		end

		points[#points] = nil
	end

	return points[1]
end

function module:getPointDistance(points)
	local total = 0

	for i = 1, #points - 1 do
		total = total + (points[i] - points[i + 1]).Magnitude
	end

	return math.ceil(total * 2)
end

function createLookup(...)
	local distSum = 0

	local sums = {}
	local step = 1 / (math.floor(module:getPointDistance({...}) / module.segments))

	for i = 0, 1, step do
		local firstPoint = module:getBezierPosition(i, ...)
		local secondPoint = module:getBezierPosition(i + step, ...)

		local dist = (secondPoint - firstPoint).Magnitude
		table.insert(sums, distSum)

		distSum += dist
	end

	return sums 
end

function remap(n, oldMin, oldMax, min, max)
	return (min + ((max-min) * ((n - oldMin) / (oldMax - oldMin))))
end

function module:getAdjustedT(t, ...)
	local lookup = createLookup(...)

	local arcLength = lookup[#lookup]
	local targetDist = arcLength * t

	for i, dist in next, lookup do
		local nextDist = lookup[i + 1]

		if dist and nextDist and targetDist >= dist and targetDist < nextDist then
			return remap(targetDist, dist, nextDist, i / #lookup, (i + 1) / #lookup)
		end
	end
end

function module:sortPoints(points)
	table.sort(points, function(a, b)
		local point = tonumber(string.sub(a.Name, 6))
		local nextPoint = tonumber(string.sub(b.Name, 6))

		if point and nextPoint then
			return point < nextPoint
		end
	end)
end

function module:drawRope(point, nextPoint, parent)
	local rope = Instance.new("Part")
	local distance = (point - nextPoint).Magnitude

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

function module:createRope(parent, ...)
	local points = {...}
	local pointPositions = {}

	for i = 1, #points do
		table.insert(pointPositions, points[i].Position)
	end

	local step = 1 / math.floor(module:getPointDistance(pointPositions) / 8.75)

	for i = 0, 1, step do			
		local point = module:getBezierPosition(math.clamp(i, 0, 1), unpack(pointPositions))
		local nextPoint = module:getBezierPosition(math.clamp(i + step, 0, 1), unpack(pointPositions))

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

function module:renderRope(pointsModel)
	local points = {}
	local pointPositions = {}

	for i,v in next, pointsModel:GetChildren() do
		if string.find(v.Name, "Point") then
			v.Transparency = 1
			table.insert(points, v)
		end
	end

	module:sortPoints(points)

	local rope = Instance.new("Folder")
	rope.Name = "Rope"
	rope.Parent = pointsModel

	module:createRope(rope, unpack(points))
	module:createOrb("StartOrb", nil, Color3.fromRGB(0, 255, 0), points[1])
end

return module
