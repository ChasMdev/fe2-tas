import { Players, Workspace, PhysicsService, RunService, ReplicatedStorage } from "@rbxts/services";

PhysicsService.RegisterCollisionGroup("BodyParts");
PhysicsService.RegisterCollisionGroup("RootParts");

PhysicsService.CollisionGroupSetCollidable("BodyParts", "Default", false);
PhysicsService.CollisionGroupSetCollidable("BodyParts", "RootParts", false);
PhysicsService.CollisionGroupSetCollidable("BodyParts", "BodyParts", false);
PhysicsService.CollisionGroupSetCollidable("RootParts", "RootParts", false);

function onPlayerAdded(player: Player) {
	function onCharacterAdded(character: Model) {
		const humanoid = character.WaitForChild("Humanoid") as Humanoid;
		const rootPart = character.WaitForChild("HumanoidRootPart") as Part;

		rootPart.CollisionGroup = "RootParts";
		rootPart.CanCollide = true;

		function onDescendantAdded(instance: Instance) {
			if (instance.IsA("BasePart") && instance !== rootPart) {
				instance.CollisionGroup = "BodyParts";
				instance.Massless = true;
			}
		}
		humanoid.Died.Connect(() => {
			for (const [i, v] of ipairs(character.GetChildren())) {
				if (v.IsA("BasePart")) {
					v.CollisionGroup = "RootParts";
				}
			}
		});
		for (const [_, item] of pairs(character.GetDescendants())) {
			onDescendantAdded(item);
		}
		character.DescendantAdded.Connect(onDescendantAdded);

		rootPart.CustomPhysicalProperties = new PhysicalProperties(3.15, 0.5, 1, 0.3, 1);
	}
	if (player.Character) {
		onCharacterAdded(player.Character);
	}
	player.CharacterAdded.Connect(onCharacterAdded);
}

for (const [_, player] of pairs(Players.GetPlayers())) {
	onPlayerAdded(player);
}
Players.PlayerAdded.Connect(onPlayerAdded);
