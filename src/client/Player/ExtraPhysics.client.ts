import { Players, RunService, ContextActionService, UserInputService } from "@rbxts/services"
import { playerVars } from "./playerVars"
import { keybinds } from "./PLAYERKEYBINDS"

let humRootPart = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart") as Part
let hum = Players.LocalPlayer.Character?.WaitForChild("Humanoid") as Humanoid

const sfx_folder = Players.LocalPlayer.WaitForChild("PlayerScripts").WaitForChild("SFX_Folder")

const swimmables = new Array<Instance>()

let animate = Players.LocalPlayer.Character?.WaitForChild("Animate") as Script
let depthVel = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart").WaitForChild("SwimVel") as BodyVelocity

let lastSurfaced = tick()

function updCharVars() {
    humRootPart = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart") as Part
    hum = Players.LocalPlayer.Character?.WaitForChild("Humanoid") as Humanoid
    animate = Players.LocalPlayer.Character?.WaitForChild("Animate") as Script
    depthVel = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart").WaitForChild("SwimVel") as BodyVelocity

    print(`Updated character varaibles`)
}

function swimJump(action: unknown, uiState: unknown) {
    if (depthVel && hum && playerVars.charState === 1) {
        if (uiState === Enum.UserInputState.Begin) {
            depthVel.Velocity = new Vector3(0, hum.WalkSpeed, 0)
        } else if (uiState === Enum.UserInputState.End && 0 < depthVel.Velocity.Y) {
            depthVel.Velocity = new Vector3(0, 0, 0)
        }
    }
}
function swimDive(action: unknown, uiState: unknown) {
    if (depthVel && hum && playerVars.charState === 1) {
        if (uiState === Enum.UserInputState.Begin) {
            depthVel.Velocity = new Vector3(0, -hum.WalkSpeed, 0)
        } else if (uiState === Enum.UserInputState.End && 0 > depthVel.Velocity.Y) {
            depthVel.Velocity = new Vector3(0, 0, 0)
        }
    }
}

function bindSlideAction() {
    if (playerVars.charState === 0) {
        ContextActionService.UnbindAction("swimJump")
        ContextActionService.UnbindAction("swimDive")
        ContextActionService.BindAction("runSlide", runSlide, true, keybinds.Slide)
        ContextActionService.SetTitle("runSlide", "Slide")
    }
}
function bindSwimActions() {
    if (playerVars.charState === 1) {
        ContextActionService.UnbindAction("runSlide")
        ContextActionService.BindAction("swimJump", swimJump, false, keybinds.SwimUp)
        ContextActionService.BindAction("swimDive", swimDive, true, keybinds.SwimDown)
        ContextActionService.SetTitle("swimDive", "Dive")
    }
}

function endSlide() {
    playerVars.isSliding = false
    hum.MoveTo(humRootPart.Position)
    humRootPart.Size = new Vector3(2, 2, 1)
    hum.HipHeight = 0;
    (hum.Parent?.FindFirstChild("Animate")?.WaitForChild("Sliding") as BindableEvent).Fire(false)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function runSlide(actname: any, inputstate: Enum.UserInputState, inputobj: any) {
    humRootPart = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart") as Part
    hum = Players.LocalPlayer.Character?.WaitForChild("Humanoid") as Humanoid
    if (playerVars.charState === 0 && humRootPart && hum) { // && humRootPart && hum
        if (inputstate === Enum.UserInputState.Begin) {
            if (hum.GetState() !== Enum.HumanoidStateType.Running || hum.GetState() !== Enum.HumanoidStateType.RunningNoPhysics) { 
                if (humRootPart.Velocity.Y > (-hum.JumpPower * 1.5)) {
                    humRootPart.Velocity = new Vector3(humRootPart.Velocity.X, -hum.JumpPower * 1.5, humRootPart.Velocity.Z);
                    (hum.Parent?.FindFirstChild("Animate")?.WaitForChild("AirDiving") as BindableEvent).Fire(true);
                    (sfx_folder.FindFirstChild("Slide") as Sound).Play()
                } 
                playerVars.isSlidePending = true
                while (hum.GetState() !== Enum.HumanoidStateType.Running && hum.GetState() !== Enum.HumanoidStateType.RunningNoPhysics) {
                    RunService.Heartbeat.Wait()
                }
                if (!playerVars.isSlidePending || playerVars.charState !== 0){
                    return
                }
                playerVars.isSlidePending = false
                playerVars.isSliding = true
            }
            const rootPos = humRootPart.Position;
            if (!playerVars.isSliding) {
                (sfx_folder.FindFirstChild("Slide") as Sound).Play()
            }
            humRootPart.Size = new Vector3(2, 1, 0.5)
            humRootPart.Velocity = new Vector3(humRootPart.Velocity.X, -35, humRootPart.Velocity.Z)
            hum.HipHeight = -1.5
            
            const slideDirection = hum.MoveDirection !== new Vector3() && hum.MoveDirection || humRootPart.CFrame.LookVector;
            (hum.Parent?.FindFirstChild("Animate")?.WaitForChild("Sliding") as BindableEvent).Fire(true)
            const endSlideTime = tick() + 0.5

            const jumpingConnection = hum.Jumping.Connect(() => {
                playerVars.isSliding = false
                jumpingConnection.Disconnect()
            })

            while (playerVars.isSliding && RunService.RenderStepped.Wait()[0]) {
                hum.MoveTo(humRootPart.Position.add(slideDirection.mul(20)))

                const _state = hum.GetState()
                if (_state === Enum.HumanoidStateType.Running || _state === Enum.HumanoidStateType.RunningNoPhysics || _state === Enum.HumanoidStateType.Freefall || _state === Enum.HumanoidStateType.Landed) {
                    if (tick() > endSlideTime) {
                        break
                    }
                }
            }
            endSlide()
            return
        } else if (inputstate === Enum.UserInputState.End) {
            if (playerVars.isSliding || playerVars.isSlidePending) {
                playerVars.isSliding = false
                playerVars.isSlidePending = false
            }
        }
    }
}

function isInWater(pos: Vector3) {
    for (const [i,v] of pairs(swimmables)) {
        const val = swimmables[i-1]
        if (val) {
            const center = (val as Part).Size.mul(0.5)
            const point = (val as Part).CFrame.PointToObjectSpace(pos)
            if (point.Y < center.Y && -center.Y < point.Y && point.X < center.X && -center.X < point.X && point.Z < center.Z && -center.Z < point.Z) {
                if (i !== 1) {
                    swimmables[i-1] = swimmables[0]
                    swimmables[0] = val
                }
                return val
            }
        }
    }
    return undefined
}

function updWater() {
    print(`Updating water...`)
    for (const [i,v] of pairs(game.Workspace.GetDescendants())) {
        if (string.find(v.Name, "_Water")[0] && (v.IsA("Part") || v.IsA("BasePart"))) {
            if (!v.FindFirstChild("BlockMesh")) {
                const mesh = new Instance("SpecialMesh", v)
                mesh.Name = "BlockMesh"
                mesh.MeshType = Enum.MeshType.Brick
                mesh.Scale = new Vector3(1,0,1)
                mesh.Offset = new Vector3(0, v.Size.Y * 0.5, 0)
            }
            try { 
                swimmables.push(v)
            } catch (error) {
                print(`Error adding water part: ${v.Name} - ${error}`)
            }
       }
    }
    updCharVars()
}

(script.Parent?.WaitForChild("misc").WaitForChild("Loading").WaitForChild("UpdWater") as BindableEvent).Event.Connect(updWater)
Players.LocalPlayer.CharacterAdded.Connect(updCharVars)

bindSlideAction()

// enable water physics only when swimmables has a water instance stored

let curWaters: unknown = undefined
let waterState = undefined

// eslint-disable-next-line no-constant-condition
while (true) {
    task.wait() // reduce lag, waits for next update instance
    if (swimmables.size() > 0) {

        const neckPos = humRootPart.Position.add(new Vector3(0, 1, 0))
        const waters = isInWater(neckPos)

        if (waters && waters !== curWaters) {
            if (waters.FindFirstChild("WaterState")) {
                waterState = (waters.WaitForChild("WaterState") as StringValue).Value
                const wStat = waters.WaitForChild("WaterState") as StringValue

                wStat.GetPropertyChangedSignal("Value").Connect(() => {
                    if (wStat === (curWaters as unknown as Instance).FindFirstChild("WaterState")) {
                        waterState = wStat.Value
                    }
                })
            } else {
                waterState = `water`
            }
            curWaters = waters
        }

        if ((waters && 1 || 0) !== playerVars.charState) {
            playerVars.charState = waters && 1 || 0
            playerVars.isSliding = false

            if (!playerVars.ziplining && animate) { 
                (animate.WaitForChild("ToggleSwim") as BindableEvent).Fire(playerVars.charState)
            }
            if (sfx_folder.FindFirstChild(`Splash_${waterState || "water"}`)) {
                (sfx_folder.FindFirstChild(`Splash_${waterState || "water"}`) as Sound).Play()
            } else {
                (sfx_folder.FindFirstChild("Splash_water") as Sound).Play()
            }

            if (playerVars.charState === 0) {
                lastSurfaced = tick()
                depthVel.MaxForce = new Vector3()
                depthVel.Velocity = new Vector3()
                humRootPart.Velocity = new Vector3(humRootPart.Velocity.X, math.clamp(humRootPart.Velocity.Y + 55, -55, 55), humRootPart.Velocity.Z)
                bindSlideAction()
            } else if (playerVars.charState === 1) {
                depthVel.MaxForce = new Vector3(0,8000,0)
                for (const [i,v] of pairs(UserInputService.GetKeysPressed())) {
                    if (v.KeyCode === keybinds.SwimDown) {
                        depthVel.Velocity = new Vector3(0, -hum.WalkSpeed, 0)
                    } else if (v.KeyCode === keybinds.SwimUp) {
                        depthVel.Velocity = new Vector3(0, hum.WalkSpeed, 0)
                    }
                }
                bindSwimActions()
            }
        }
    }
}