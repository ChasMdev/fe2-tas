import { RunService, UserInputService, Players, Workspace, ReplicatedStorage } from "@rbxts/services";
import { renderRope } from "shared/SharedModules/GenerateRope";

const tru = true; // lmfao

const player = Players.LocalPlayer;
const char = player.Character;

const humanoid = char?.WaitForChild("Humanoid") as Humanoid;
const humRootPart = char?.WaitForChild("HumanoidRootPart") as Part;

const Animation = new Instance("Animation");
Animation.AnimationId =
	"rbxassetid://" + (ReplicatedStorage.WaitForChild("AnimIDs").WaitForChild("WallHang") as IntValue).Value;
const sfx_folder = Players.LocalPlayer.WaitForChild("PlayerScripts").WaitForChild("SFX_Folder");

const lastJump = tick();
const wallAnimation = humanoid.LoadAnimation(Animation);
const wallJumping = false;
let isWallHanging = false;
let lastWalljumpTime = os.clock();

humRootPart.Touched.Connect(() => {
	const notSwimming = humanoid.GetStateEnabled("Jumping");
	const state = humanoid.GetState();

	if (
		notSwimming &&
		(state === Enum.HumanoidStateType.Jumping || state === Enum.HumanoidStateType.Freefall) &&
		!isWallHanging
	) {
		const [part, intersection, normal] = Workspace.FindPartOnRay(
			new Ray(humRootPart.Position, humRootPart.CFrame.LookVector.mul(2.5)),
			char,
		);
		if (part && part.FindFirstChild("_Wall") && lastWalljumpTime + 0.1 < os.clock()) {
			humRootPart.Anchored = true;
			humRootPart.CFrame = new CFrame(humRootPart.Position, humRootPart.Position.add(normal));

			//(sfx_folder.FindFirstChild("Wall_Latch") as Sound).Play();
			wallAnimation.Play();

			const startWallHangTime = os.clock();
			let hasJumped = false;

			task.spawn(() => {
				UserInputService.JumpRequest.Wait();
				if (startWallHangTime < os.clock() + 0.75) {
					hasJumped = true;
				}
			});

			while (tru) {
				task.wait();
				if (hasJumped) {
					break;
				}
				if (os.clock() > startWallHangTime + 0.75) {
					break;
				}
			}

			wallAnimation.Stop();

			humRootPart.Anchored = false;

			if (hasJumped) {
				humRootPart.Velocity = new Vector3(normal.X * 52, normal.Y * 52 + humanoid.JumpPower, normal.Z * 52);
				//(sfx_folder.FindFirstChild("Wall_Jump") as Sound).Play();
			} else {
				humRootPart.Velocity = new Vector3();
			}
			lastWalljumpTime = os.clock();
			isWallHanging = false;
		}
	}
});

let lastJumpTime = os.clock();
lastJumpTime = os.clock();

function TrussJump() {
	humanoid.SetStateEnabled("Climbing", false);
	lastJumpTime = os.clock();

	humRootPart.Velocity = new Vector3(humRootPart.Velocity.X, 0, humRootPart.Velocity.Z);

	if (humanoid.GetStateEnabled("Climbing") === false) {
		task.delay(0.2, () => {
			if (os.clock() > lastJumpTime + 0.2) {
				humanoid.SetStateEnabled("Climbing", true);
			}
		});
	}

	humRootPart.Velocity = new Vector3(humRootPart.Velocity.X, humanoid.JumpPower * 1.1, humRootPart.Velocity.Z);
}

humanoid.Jumping.Connect((enteringState) => {
	if (enteringState && humanoid.GetStateEnabled("Climbing") === true) {
		TrussJump();
	}
});

//memory leak
RunService.PostSimulation.Connect(() => {
	if (humanoid.GetState() === Enum.HumanoidStateType.Jumping && humanoid.GetStateEnabled("Climbing") === true) {
		TrussJump();
	}
});

// create ziplines. not sure if it should be done serverside instead
for (const [i, v] of pairs(game.Workspace.GetDescendants())) {
	if (string.find(v.Name, "_Rope")[0] && (v.IsA("Model"))) {
		renderRope(v);
	}
}