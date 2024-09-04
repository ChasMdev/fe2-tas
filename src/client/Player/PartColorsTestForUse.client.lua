local StarterPlayer = game:GetService("StarterPlayer")
local PLAYERKEYBINDS = require(StarterPlayer.StarterPlayerScripts.PLAYERKEYBINDS)
local UserInputService = game:GetService("UserInputService")

local colorToggle = false
local partWhitelist = {}

local function partColorToggle(bool)
	for i,v in pairs(game.Workspace:GetDescendants()) do
		if v:IsA("BasePart") and bool == true and v.Parent ~= game.Players.LocalPlayer.Character and not v.Parent:IsA("Accessory") then
			local unionUsePartColor = false
			if v:IsA("UnionOperation") then
				unionUsePartColor = v.UsePartColor
			else 
				unionUsePartColor = nil
			end
			table.insert(partWhitelist, {
				Part = v,
				Color = v.Color,
				Transparency = v.Transparency,
				UsePartColor = unionUsePartColor
			})
			if v.CanCollide == false then
				v.Transparency = 1
			end
			if v:IsA("UnionOperation") then
				v.UsePartColor = true
			end
			local rand = math.random(1,6)
			if v:IsA("Part") and v.Anchored and not v:FindFirstChildOfClass("SpecialMesh") then
				if rand == 1 then
					v.Color = Color3.fromRGB(163, 162, 165)
				elseif rand == 2 then
					v.Color = Color3.fromRGB(135, 134, 137)
				elseif rand == 3 then
					v.Color = Color3.fromRGB(112, 111, 114)
				elseif rand == 4 then
					v.Color = Color3.fromRGB(93, 92, 95)
				elseif rand == 5 then
					v.Color = Color3.fromRGB(77, 76, 79)
				elseif rand == 6 then
					v.Color = Color3.fromRGB(64, 63, 66)
				end
			elseif v:IsA("UnionOperation") then
				v.Color = Color3.new(0,1,1)
			elseif v:IsA("MeshPart") then
				if rand == 1 then
					v.Color = Color3.fromRGB(0, 255, 0)
				elseif rand == 2 then
					v.Color = Color3.fromRGB(184, 255, 0)
				elseif rand == 3 then
					v.Color = Color3.fromRGB(65, 80, 70)
				elseif rand == 4 then
					v.Color = Color3.fromRGB(138, 233, 124)
				elseif rand == 5 then
					v.Color = Color3.fromRGB(26, 55, 21)
				elseif rand == 6 then
					v.Color = Color3.fromRGB(65, 108, 70)
				end
			elseif v:FindFirstChildOfClass("SpecialMesh") then
				if rand == 1 then
					v.Color = Color3.fromRGB(0, 255, 0)
				elseif rand == 2 then
					v.Color = Color3.fromRGB(184, 255, 0)
				elseif rand == 3 then
					v.Color = Color3.fromRGB(65, 80, 70)
				elseif rand == 4 then
					v.Color = Color3.fromRGB(138, 233, 124)
				elseif rand == 5 then
					v.Color = Color3.fromRGB(26, 55, 21)
				elseif rand == 6 then
					v.Color = Color3.fromRGB(65, 108, 70)
				end
			elseif v.Anchored == false then
				if rand == 1 then
					v.Color = Color3.fromRGB(255,127,80)
				elseif rand == 2 then
					v.Color = Color3.fromRGB(255,99,71)
				elseif rand == 3 then
					v.Color = Color3.fromRGB(255,69,0)
				elseif rand == 4 then
					v.Color = Color3.fromRGB(204, 85, 0)
				elseif rand == 5 then
					v.Color = Color3.fromRGB(255,165,0)
				elseif rand == 6 then
					v.Color = Color3.fromRGB(255,140,0)
				end
			end
			-----> ADD SLOPED PARTS DETECTION HERE <-----
			local function isPartSloped(part)
				local cf = part.CFrame
				local size = part.Size / 2

				local faceCFrames = {
					cf * CFrame.new(0, size.Y, 0),
        			cf * CFrame.new(0, -size.Y, 0),
        			cf * CFrame.new(size.X, 0, 0),
        			cf * CFrame.new(-size.X, 0, 0),
        			cf * CFrame.new(0, 0, size.Z),
        			cf * CFrame.new(0, 0, -size.Z),
				}

				for _,faceCFrame in ipairs(faceCFrames) do
					local upVector = faceCFrame.UpVector
        			local rightVector = faceCFrame.RightVector
        			local lookVector = faceCFrame.LookVector
							
        			local upY = math.abs(upVector.Y)
        			local rightY = math.abs(rightVector.Y)
        			local lookY = math.abs(lookVector.Y)
							
        			local isProperlyAligned = (upY > 0.999 and rightY < 1e-4 and lookY < 1e-4) or (rightY > 0.999 and upY < 1e-4 and lookY < 1e-4) or (lookY > 0.999 and upY < 1e-4 and rightY < 1e-4)
							
        			if not isProperlyAligned then
        			    return true
        			end
				end
    			return false
			end
			if isPartSloped(v) == true and v.Anchored then
				if rand == 1 then
					v.Color = Color3.fromRGB(148, 85, 244)
				elseif rand == 2 then
					v.Color = Color3.fromRGB(133, 77, 220)
				elseif rand == 3 then
					v.Color = Color3.fromRGB(118, 68, 195)
				elseif rand == 4 then
					v.Color = Color3.fromRGB(104, 59, 171)
				elseif rand == 5 then
					v.Color = Color3.fromRGB(89, 51, 146)
				elseif rand == 6 then
					v.Color = Color3.fromRGB(74, 43, 122)
				end
			end
		end
	end
	if bool == false then
		for i2,v2 in pairs(partWhitelist) do
			v2.Part.Color = v2.Color
			v2.Part.Transparency = v2.Transparency
			if v2.Part:IsA("UnionOperation") then
				v2.Part.UsePartColor = v2.UsePartColor
			end
		end
		table.clear(partWhitelist)
	end
end

UserInputService.InputBegan:Connect(function(input)
	if input.KeyCode == PLAYERKEYBINDS.keybinds.PartColors then
		colorToggle = not colorToggle
		partColorToggle(colorToggle)
	end
end)