import { ReplicatedStorage, ServerStorage, Workspace } from "@rbxts/services";

const loadBindable = new Instance("RemoteEvent", ReplicatedStorage);
loadBindable.Name = "LoadMapBindable";

loadBindable.OnServerEvent.Connect((plrName, mapName) => {
	print("debug1");
	if (ServerStorage.FindFirstChild("Maps")?.FindFirstChild(tostring(mapName))) {
		print(`Found map ${mapName}`);
		const map = ServerStorage.FindFirstChild("Maps")?.FindFirstChild(tostring(mapName))?.Clone();
		if (map?.IsA("Model")) {
			map.Parent = Workspace;
			map.PrimaryPart = map.FindFirstChild("Spawn", true) as Part;
		}
	}
});
