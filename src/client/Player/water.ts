import { playerVars } from "./playerVars";
import { Players } from "@rbxts/services";

const swimmables = new Array<Instance>();

let humRootPart = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart") as Part;
let hum = Players.LocalPlayer.Character?.WaitForChild("Humanoid") as Humanoid;
let animate = Players.LocalPlayer.Character?.WaitForChild("Animate") as Script;
let depthVel = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart").WaitForChild("SwimVel") as BodyVelocity;

let lastSurfaced = tick();

export function updCharVars() {
	humRootPart = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart") as Part;
	hum = Players.LocalPlayer.Character?.WaitForChild("Humanoid") as Humanoid;
	animate = Players.LocalPlayer.Character?.WaitForChild("Animate") as Script;
	depthVel = Players.LocalPlayer.Character?.WaitForChild("HumanoidRootPart").WaitForChild("SwimVel") as BodyVelocity;
}

export function isInWater(pos: Vector3) {
	for (const [i, v] of pairs(swimmables)) {
		const val = swimmables[i];
		if (val) {
			const center = (val as Part).Size.mul(0.5);
			const point = (val as Part).CFrame.PointToObjectSpace(pos);
			if (
				point.Y < center.Y &&
				-center.Y < point.Y &&
				point.X < center.X &&
				-center.X < point.X &&
				point.Z < center.Z &&
				-center.Z < point.Z
			) {
				if (i !== 1) {
					swimmables[i] = swimmables[1];
					swimmables[1] = val;
				}
				return val;
			}
		}
	}
	return undefined;
}

export function updWater() {
	print("Updating water...");
	for (const [i, v] of pairs(game.Workspace.GetDescendants())) {
		if (v.Name === "_Water" && v.IsA("BasePart")) {
			swimmables.push(v);
			if (!v.FindFirstChild("BlockMesh")) {
				const mesh = new Instance("SpecialMesh", v);
				mesh.Name = "BlockMesh";
				mesh.MeshType = Enum.MeshType.Brick;
				mesh.Scale = new Vector3(1, 0, 1);
				mesh.Offset = new Vector3(0, v.Size.Y * 0.5, 0);
			}
		}
	}
	print(swimmables);
	updCharVars();
}

// enable water physics only when swimmables has a water instance stored

while (swimmables.size() < 0) {
	task.wait(); // reduce lag, waits for next update instance

	const neckPos = humRootPart.Position.add(new Vector3(0, 1, 0));
	const waters = isInWater(neckPos);

	if (((waters && 1) || 0) !== playerVars.charState) {
		playerVars.charState = (waters && 1) || 0;
		playerVars.isSliding = false;

		if (!playerVars.ziplining && animate) {
			(animate.WaitForChild("ToggleSwim") as BindableEvent).Fire(playerVars.charState);
		}

		if (playerVars.charState === 0) {
			lastSurfaced = tick();
			depthVel.MaxForce = new Vector3();
			depthVel.Velocity = new Vector3();
			humRootPart.Velocity = new Vector3(
				humRootPart.Velocity.X,
				math.clamp(humRootPart.Velocity.Y + 55, -55, 55),
				humRootPart.Velocity.Z,
			);
		}
	}
}
