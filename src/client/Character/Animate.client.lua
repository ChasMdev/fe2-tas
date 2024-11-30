-- <-- add all the remote events --> --
local _AirDiving = Instance.new("BindableEvent", script)
_AirDiving.Name = "AirDiving"
local _ChangedAnim = Instance.new("BindableEvent", script)
_ChangedAnim.Name = "ChangedAnim"
local _EmoteFire = Instance.new("BindableEvent", script)
_EmoteFire.Name = "EmoteFire"
local _Sliding = Instance.new("BindableEvent", script)
_Sliding.Name = "Sliding"
local _Swinging = Instance.new("BindableEvent", script)
_Swinging.Name = "Swinging"
local _ToggleSwim = Instance.new("BindableEvent", script)
_ToggleSwim.Name = "ToggleSwim"
local _UpdEmote = Instance.new("RemoteEvent", script)
_UpdEmote.Name = "UpdEmote"
local SwimVelocity = Instance.new("BodyVelocity", script.Parent:WaitForChild("HumanoidRootPart"))
SwimVelocity.Name = "SwimVel"
SwimVelocity.MaxForce = Vector3.new(0,0,0)
SwimVelocity.Velocity = Vector3.new(0,0,0)
SwimVelocity.P = 8000
-- <-------------------------------> --

function waitForChild(parent, childName)
    local child = parent:findFirstChild(childName)
    if child then
        return child
    end
    while true do
        child = parent.ChildAdded:wait()
        if child.Name == childName then
            return child
        end
    end
end
local animIDs = game.ReplicatedStorage:WaitForChild("AnimIDs")
local Figure = script.Parent
local Torso = waitForChild(Figure, "Torso")
local RightShoulder = waitForChild(Torso, "Right Shoulder")
local LeftShoulder = waitForChild(Torso, "Left Shoulder")
local RightHip = waitForChild(Torso, "Right Hip")
local LeftHip = waitForChild(Torso, "Left Hip")
local Neck = waitForChild(Torso, "Neck")
local Humanoid = waitForChild(Figure, "Humanoid")
local pose = "Standing"
local emote
local charState = 0
script:WaitForChild("ToggleSwim")
repeat
    wait()
until Figure.HumanoidRootPart:FindFirstChild("SwimVel")
local depthVel = Figure.HumanoidRootPart.SwimVel
local swimIDs = {
    "rbxassetid://" .. animIDs.SwimAngle90.Value,
    "rbxassetid://" .. animIDs.SwimAngle45.Value,
    "rbxassetid://" .. animIDs.SwimAngle0.Value,
    "rbxassetid://" .. animIDs["SwimAngle-45"].Value,
    "rbxassetid://" .. animIDs["SwimAngle-90"].Value
}
local swimAnims = {}
local currentAnim = ""
local currentAnimInstance, currentAnimTrack, currentAnimKeyframeHandler
local currentAnimSpeed = 1
local animTable = {}
local animNames = {
    idle = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.Idle.Value,
            weight = 9
        },
        {
            id = "http://www.roblox.com/asset/?id=180435792",
            weight = 1
        }
    },
    walk = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.Walk.Value,
            weight = 10
        }
    },
    run = {
        {id = "run.xml", weight = 10}
    },
    jump = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.Jump.Value,
            weight = 10
        }
    },
    fall = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.Fall.Value,
            weight = 10
        }
    },
    slide = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.Slide.Value,
            weight = 10
        }
    },
    swing = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.Swingy.Value,
            weight = 10
        }
    },
    swimidle = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.SwimIdle.Value,
            weight = 10
        }
    },
    swim = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.Swim.Value,
            weight = 10
        }
    },
    climb = {
        {
            id = "http://www.roblox.com/asset/?id=180436334",
            weight = 10
        }
    },
    sit = {
        {
            id = "http://www.roblox.com/asset/?id=178130996",
            weight = 10
        }
    },
    airdive = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.AirDive.Value, 
            weight = 10
        }
    },
    toolnone = {
        {
            id = "http://www.roblox.com/asset/?id=182393478",
            weight = 10
        }
    },
    toolslash = {
        {
            id = "http://www.roblox.com/asset/?id=129967390",
            weight = 10
        }
    },
    toollunge = {
        {
            id = "http://www.roblox.com/asset/?id=129967478",
            weight = 10
        }
    },
    wave = {
        {
            id = "http://www.roblox.com/asset/?id=128777973",
            weight = 10
        }
    },
    point = {
        {
            id = "http://www.roblox.com/asset/?id=128853357",
            weight = 10
        }
    },
    dance1 = {
        {
            id = "http://www.roblox.com/asset/?id=182435998",
            weight = 10
        },
        {
            id = "http://www.roblox.com/asset/?id=182491037",
            weight = 10
        },
        {
            id = "http://www.roblox.com/asset/?id=182491065",
            weight = 10
        }
    },
    dance2 = {
        {
            id = "http://www.roblox.com/asset/?id=182436842",
            weight = 10
        },
        {
            id = "http://www.roblox.com/asset/?id=182491248",
            weight = 10
        },
        {
            id = "http://www.roblox.com/asset/?id=182491277",
            weight = 10
        }
    },
    dance3 = {
        {
            id = "http://www.roblox.com/asset/?id=182436935",
            weight = 10
        },
        {
            id = "http://www.roblox.com/asset/?id=182491368",
            weight = 10
        },
        {
            id = "http://www.roblox.com/asset/?id=182491423",
            weight = 10
        }
    },
    laugh = {
        {
            id = "http://www.roblox.com/asset/?id=129423131",
            weight = 10
        }
    },
    cheer = {
        {
            id = "http://www.roblox.com/asset/?id=129423030",
            weight = 10
        }
    },
    customemote = {
        {
            id = "http://www.roblox.com/asset/?id=" .. animIDs.Emote.Value,
            weight = 10
        }
    }
}

local dances = {
    "dance1",
    "dance2",
    "dance3"
}
local emoteNames = {
    wave = false,
    point = false,
    dance1 = true,
    dance2 = true,
    dance3 = true,
    laugh = false,
    cheer = false
}
function configureAnimationSet(name, fileList)
    if animTable[name] ~= nil then
        for _, connection in pairs(animTable[name].connections) do
            connection:disconnect()
        end
    end
    animTable[name] = {}
    animTable[name].count = 0
    animTable[name].totalWeight = 0
    animTable[name].connections = {}
    local config = script:FindFirstChild(name)
    if config ~= nil then
        table.insert(animTable[name].connections, config.ChildAdded:connect(function(child)
            configureAnimationSet(name, fileList)
        end))
        table.insert(animTable[name].connections, config.ChildRemoved:connect(function(child)
            configureAnimationSet(name, fileList)
        end))
        local idx = 1
        for _, childPart in pairs(config:GetChildren()) do
            if childPart:IsA("Animation") then
                table.insert(animTable[name].connections, childPart.Changed:connect(function(property)
                    configureAnimationSet(name, fileList)
                end))
                animTable[name][idx] = {}
                animTable[name][idx].anim = childPart
                local weightObject = childPart:FindFirstChild("Weight")
                if weightObject == nil then
                    animTable[name][idx].weight = 1
                else
                    animTable[name][idx].weight = weightObject.Value
                end
                animTable[name].count = animTable[name].count + 1
                animTable[name].totalWeight = animTable[name].totalWeight + animTable[name][idx].weight
                idx = idx + 1
            end
        end
    end
    if animTable[name].count <= 0 then
        for idx, anim in pairs(fileList) do
            animTable[name][idx] = {}
            animTable[name][idx].anim = Instance.new("Animation")
            animTable[name][idx].anim.Name = name
            animTable[name][idx].anim.AnimationId = anim.id
            animTable[name][idx].weight = anim.weight
            animTable[name].count = animTable[name].count + 1
            animTable[name].totalWeight = animTable[name].totalWeight + anim.weight
        end
    end
end
function scriptChildModified(child)
    local fileList = animNames[child.Name]
    if fileList ~= nil then
        configureAnimationSet(child.Name, fileList)
    end
end
script.ChildAdded:connect(scriptChildModified)
script.ChildRemoved:connect(scriptChildModified)
for name, fileList in pairs(animNames) do
    configureAnimationSet(name, fileList)
end
local toolAnim = "None"
local toolAnimTime = 0
local jumpAnimTime = 0
local jumpAnimDuration = 0.3
local toolTransitionTime = 0.1
local fallTransitionTime = 0.3
local jumpMaxLimbVelocity = 0.75
function stopAllAnimations()
    local oldAnim = currentAnim
    if emoteNames[oldAnim] ~= nil and emoteNames[oldAnim] == false then
        oldAnim = "idle"
    end
    currentAnim = ""
    currentAnimInstance = nil
    if currentAnimKeyframeHandler ~= nil then
        currentAnimKeyframeHandler:disconnect()
    end
    if currentAnimTrack ~= nil then
        currentAnimTrack:Stop()
        currentAnimTrack:Destroy()
        currentAnimTrack = nil
    end
    return oldAnim
end
function setAnimationSpeed(speed)
    if speed ~= currentAnimSpeed then
        currentAnimSpeed = speed
        currentAnimTrack:AdjustSpeed(currentAnimSpeed)
    end
end
function keyFrameReachedFunc(frameName)
    if frameName == "End" then
        local repeatAnim = currentAnim
        if emoteNames[repeatAnim] ~= nil and emoteNames[repeatAnim] == false then
            repeatAnim = "idle"
        end
        local animSpeed = currentAnimSpeed
        playAnimation(repeatAnim, 0, Humanoid)
        setAnimationSpeed(animSpeed)
    end
end
local sliding = false
local swinging = false
function playAnimation(animName, transitionTime, humanoid)
    if (sliding and animName ~= "slide") or (swinging and animName ~= "swing") then
        return
    end

    local roll = math.random(1, animTable[animName].totalWeight)
    local origRoll = roll
    local idx = 1
    while roll > animTable[animName][idx].weight do
        roll = roll - animTable[animName][idx].weight
        idx = idx + 1
    end
    local anim = animTable[animName][idx].anim
    if anim ~= currentAnimInstance then
        if currentAnimTrack ~= nil then
            currentAnimTrack:Stop(transitionTime)
            currentAnimTrack:Destroy()
        end
        currentAnimSpeed = 1
        currentAnimTrack = humanoid:LoadAnimation(anim)
        currentAnimTrack:Play(transitionTime)
        currentAnim = animName
        currentAnimInstance = anim
        script.ChangedAnim:Fire(anim)
        if currentAnimKeyframeHandler ~= nil then
            currentAnimKeyframeHandler:disconnect()
        end
        currentAnimKeyframeHandler = currentAnimTrack.KeyframeReached:connect(keyFrameReachedFunc)
    end
end
local toolAnimName = ""
local toolAnimTrack, toolAnimInstance, currentToolAnimKeyframeHandler
function toolKeyFrameReachedFunc(frameName)
    if frameName == "End" then
        playToolAnimation(toolAnimName, 0, Humanoid)
    end
end
function playToolAnimation(animName, transitionTime, humanoid)
    local roll = math.random(1, animTable[animName].totalWeight)
    local origRoll = roll
    local idx = 1
    while roll > animTable[animName][idx].weight do
        roll = roll - animTable[animName][idx].weight
        idx = idx + 1
    end
    local anim = animTable[animName][idx].anim
    if toolAnimInstance ~= anim then
        if toolAnimTrack ~= nil then
            toolAnimTrack:Stop()
            toolAnimTrack:Destroy()
            transitionTime = 0
        end
        toolAnimTrack = humanoid:LoadAnimation(anim)
        toolAnimTrack:Play(transitionTime)
        toolAnimName = animName
        toolAnimInstance = anim
        currentToolAnimKeyframeHandler = toolAnimTrack.KeyframeReached:connect(toolKeyFrameReachedFunc)
    end
end
function stopToolAnimations()
    local oldAnim = toolAnimName
    if currentToolAnimKeyframeHandler ~= nil then
        currentToolAnimKeyframeHandler:disconnect()
    end
    toolAnimName = ""
    toolAnimInstance = nil
    if toolAnimTrack ~= nil then
        toolAnimTrack:Stop()
        toolAnimTrack:Destroy()
        toolAnimTrack = nil
    end
    return oldAnim
end
function onRunning(speed)
    if charState == 0 then
        if speed > 0.01 then
            playAnimation("walk", 0.1, Humanoid)
            if currentAnimInstance and string.match(currentAnimInstance.AnimationId, tostring(animIDs.Walk.Value)) then
                setAnimationSpeed(speed / 26)
            end
            pose = "Running"
        else
            playAnimation("idle", 0.1, Humanoid)
            pose = "Standing"
        end
    end
end
function onDied()
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    pose = "Dead"
end
function onJumping()
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    if charState == 0 then
        playAnimation("jump", 0.1, Humanoid)
        jumpAnimTime = jumpAnimDuration
        pose = "Jumping"
        if Figure:FindFirstChild("Buddy") then
            Figure.Buddy.Follow.Jump:FireServer()
        end
    end
end
function onClimbing(speed)
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    playAnimation("climb", 0.1, Humanoid)
    setAnimationSpeed(speed / 12)
    pose = "Climbing"
end
function onGettingUp()
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    pose = "GettingUp"
end
function onFreeFall()
    if charState == 0 then
        if jumpAnimTime <= 0 then
            if currentAnim ~= "airdive" then
                playAnimation("fall", fallTransitionTime, Humanoid)
            end
        end
    elseif charState == 1 then
        if Humanoid.MoveDirection.X ~= 0 or Humanoid.MoveDirection.Z ~= 0 or Figure.HumanoidRootPart.SwimVel.Velocity.Y ~= 0 then
            playAnimation("swim", 0.1, Humanoid)
            updateSwimDir()
        else
            playAnimation("swimidle", 0.1, Humanoid)
        end
    end
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    pose = "FreeFall"
end
function onFallingDown()
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    pose = "FallingDown"
end
function onSeated()
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    pose = "Seated"
end
function onPlatformStanding()
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    pose = "PlatformStanding"
end
function onSwimming(speed)
    --script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,false)
    if speed > 0 then
        pose = "Running"
    else
        pose = "Standing"
    end
end
function getTool()
    for _, kid in ipairs(Figure:GetChildren()) do
        if kid.className == "Tool" then
            return kid
        end
    end
    return nil
end
function getToolAnim(tool)
    for _, c in ipairs(tool:GetChildren()) do
        if c.Name == "toolanim" and c.className == "StringValue" then
            return c
        end
    end
    return nil
end
function animateTool()
    if toolAnim == "None" then
        playToolAnimation("toolnone", toolTransitionTime, Humanoid)
        return
    end
    if toolAnim == "Slash" then
        playToolAnimation("toolslash", 0, Humanoid)
        return
    end
    if toolAnim == "Lunge" then
        playToolAnimation("toollunge", 0, Humanoid)
        return
    end
end
function moveSit()
    RightShoulder.MaxVelocity = 0.15
    LeftShoulder.MaxVelocity = 0.15
    RightShoulder:SetDesiredAngle(1.57)
    LeftShoulder:SetDesiredAngle(-1.57)
    RightHip:SetDesiredAngle(1.57)
    LeftHip:SetDesiredAngle(-1.57)
end
local lastTick = 0
function move(time)
    local amplitude = 1
    local frequency = 1
    local deltaTime = time - lastTick
    lastTick = time
    local climbFudge = 0
    local setAngles = false
    if jumpAnimTime > 0 then
        jumpAnimTime = jumpAnimTime - deltaTime
    end
    if pose == "FreeFall" and jumpAnimTime <= 0 then
        if charState == 0 then
            if currentAnim ~= "airdive" then
                playAnimation("fall", fallTransitionTime, Humanoid)
            elseif charState == 1 then
                if Humanoid.MoveDirection.X ~= 0 or Humanoid.MoveDirection.Z ~= 0 or depthVel.Velocity.Y ~= 0 then
                    playAnimation("swim", 0.1, Humanoid)
                else
                    playAnimation("swimidle", 0.1, Humanoid)
                end
            end
        elseif charState == 1 then
            if Humanoid.MoveDirection.X ~= 0 or Humanoid.MoveDirection.Z ~= 0 or depthVel.Velocity.Y ~= 0 then
                playAnimation("swim", 0.1, Humanoid)
            else
                playAnimation("swimidle", 0.1, Humanoid)
            end
        end
    elseif pose == "Seated" then
        playAnimation("sit", 0.5, Humanoid)
        return
    elseif pose == "Running" then
        playAnimation("walk", 0.1, Humanoid)
    elseif pose == "Dead" or pose == "GettingUp" or pose == "FallingDown" or pose == "Seated" or pose == "PlatformStanding" then
        stopAllAnimations()
        amplitude = 0.1
        frequency = 1
        setAngles = true
    end
    if setAngles then
        local desiredAngle = amplitude * math.sin(time * frequency)
        RightShoulder:SetDesiredAngle(desiredAngle + climbFudge)
        LeftShoulder:SetDesiredAngle(desiredAngle - climbFudge)
        RightHip:SetDesiredAngle(-desiredAngle)
        LeftHip:SetDesiredAngle(-desiredAngle)
    end
    local tool = getTool()
    if tool and tool:FindFirstChild("Handle") then
        local animStringValueObject = getToolAnim(tool)
        if animStringValueObject then
            toolAnim = animStringValueObject.Value
            animStringValueObject.Parent = nil
            toolAnimTime = time + 0.3
        end
        if time > toolAnimTime then
            toolAnimTime = 0
            toolAnim = "None"
        end
        animateTool()
    else
        stopToolAnimations()
        toolAnim = "None"
        toolAnimInstance = nil
        toolAnimTime = 0
    end
end
Humanoid.Died:connect(onDied)
Humanoid.Running:connect(onRunning)
Humanoid.Jumping:connect(onJumping)
Humanoid.Climbing:connect(onClimbing)
Humanoid.GettingUp:connect(onGettingUp)
Humanoid.FreeFalling:connect(onFreeFall)
Humanoid.FallingDown:connect(onFallingDown)
Humanoid.Seated:connect(onSeated)
Humanoid.PlatformStanding:connect(onPlatformStanding)
Humanoid.Swimming:connect(onSwimming)
local soundcooldown = tick()
function performEmote(emote, chatted)
    if pose == "Standing" and emote then
        if not chatted then
      --[[if animTable[emote][1].anim.AnimationId == "http://www.roblox.com/asset/?id=740013068" then
        if Figure:FindFirstChild("Head") and Figure.Head:FindFirstChild("Died") then
          Figure.Head.Died:Play()
          --print("Done it xd")
        end
      elseif animTable[emote][1].anim.AnimationId == "http://www.roblox.com/asset/?id=1798865094" then
        Figure.Head.BassBoost:Play()
      end]]
        if soundcooldown < tick() - 3 then
            soundcooldown = tick();
                if Figure.Head:FindFirstChild("Emote") then
                    if Figure.Head.Emote.SoundId ~= "" then
                        Figure.Head.Emote:Play();
                    end;
                end;
            end;
        end
        playAnimation(emote, 0.1, Humanoid)
    end
end
game.Players.LocalPlayer.Chatted:connect(function(msg)
    local emote = ""
    if msg == "/e dance" then
        emote = dances[math.random(1, #dances)]
    elseif string.sub(msg, 1, 3) == "/e " then
        emote = string.sub(msg, 4)
    elseif string.sub(msg, 1, 7) == "/emote " then
        emote = string.sub(msg, 8)
    end
    if emoteNames[emote] ~= nil then
        performEmote(emote, true)
    end
end)
for i = 1, #swimIDs do
    local anim = Instance.new("Animation")
    anim.Name = "SwimAngle" .. i
    anim.AnimationId = swimIDs[i]
    anim.Parent = Humanoid
    local loadedAnim = Humanoid:LoadAnimation(anim)
    table.insert(swimAnims, loadedAnim)
end
function updateSwimDir()
    for i = 1, #swimAnims do
        swimAnims[i]:Stop()
    end
    if charState == 1 then
        local setDir = 0
        if Humanoid.MoveDirection.X ~= 0 or Humanoid.MoveDirection.Z ~= 0 then
            setDir = 3
            if depthVel.Velocity.Y ~= 0 then
                setDir = setDir + math.floor(depthVel.Velocity.Y / math.abs(depthVel.Velocity.Y))
            end
        elseif 0 > depthVel.Velocity.Y then
            setDir = 1
        elseif 0 < depthVel.Velocity.Y then
            setDir = 5
        end
        if setDir > 0 then
            --print(swimIDs[setDir])
            swimAnims[setDir]:Play()
        end
    end
end
Humanoid.Changed:connect(function(prop)
    if prop == "MoveDirection" then
        updateSwimDir()
    end
end)
depthVel.Changed:connect(function(prop)
    if prop == "Velocity" then
        updateSwimDir()
    end
end)
script.ToggleSwim.Event:connect(function(nState)
    charState = nState
    local bool = charState == 0
    Humanoid:SetStateEnabled(Enum.HumanoidStateType.Running, bool)
    Humanoid:SetStateEnabled(Enum.HumanoidStateType.Landed, bool)
    Humanoid:SetStateEnabled(Enum.HumanoidStateType.Jumping, bool)
    Humanoid:SetStateEnabled(Enum.HumanoidStateType.RunningNoPhysics, bool)
    Humanoid:SetStateEnabled(Enum.HumanoidStateType.Climbing, bool)

    Humanoid:SetStateEnabled(Enum.HumanoidStateType.Swimming,not bool)
    
    if bool == false then
        Humanoid:ChangeState(Enum.HumanoidStateType.Physics)
        wait()
        Humanoid:ChangeState(Enum.HumanoidStateType.Freefall)
    end
end)
function changeEmote(newEmote)
    --print("Received emoteid: " .. tostring(newEmote))
    if newEmote == 0 then
      --[[newEmote = 740015671]]newEmote = animIDs.Emote.Value
    end
    animNames.customemote[1].id = "http://www.roblox.com/asset/?id=" .. newEmote
    configureAnimationSet("customemote", animNames.customemote)
end
script:WaitForChild("UpdEmote").OnClientEvent:connect(changeEmote)
script:WaitForChild("EmoteFire").Event:connect(function()
    --if game.ReplicatedStorage.Emote.SoundId then
    --	script.Parent:WaitForChild("Sound"):WaitForChild("EmoteSound"):FireServer(game.ReplicatedStorage.Emote.SoundId,true)
    --end
    performEmote("customemote")
end)
script:WaitForChild("AirDiving").Event:Connect(function(play)
    playAnimation("airdive", 0, Humanoid)
end)
script:WaitForChild("Sliding").Event:Connect(function(play)
    sliding = play
    if play == true then
        playAnimation("slide", 0.1, Humanoid)
        return
    end
    move(os.clock())
    setAnimationSpeed(20 / 26)
    if currentAnim == "slide" then
        playAnimation("idle", 0.1, Humanoid)
    end
end)
script:WaitForChild("Swinging").Event:Connect(function(play)
    swinging = play
    if play == true then
        Humanoid:SetStateEnabled(Enum.HumanoidStateType.FallingDown, false) -- stop ragdoll after zipline
        --game.Players.LocalPlayer.PlayerScripts.CL_MAIN_GameScript.SFX.GrabZipline:Play()
        --game.Players.LocalPlayer.PlayerScripts.CL_MAIN_GameScript.SFX.Zipline:Play()
        playAnimation("swing", 0.1, Humanoid)
        return
    end
    --game.Players.LocalPlayer.PlayerScripts.CL_MAIN_GameScript.SFX.DropZipline:Play()
    --game.Players.LocalPlayer.PlayerScripts.CL_MAIN_GameScript.SFX.Zipline:Stop()
    move(tick())
    setAnimationSpeed(0.7692307692307693)
    if currentAnim == "swing" then
        playAnimation("idle", 0.1, Humanoid)
    end
    task.wait(0.2)
    Humanoid:SetStateEnabled(Enum.HumanoidStateType.FallingDown, true) -- reenable ragdoll
end)
local runService = game:service("RunService")
playAnimation("idle", 0.1, Humanoid)
pose = "Standing"
while Figure.Parent ~= nil do
    local _, time = wait(0.1)
    move(time)
end