import { ReplicatedStorage, ServerStorage, Workspace } from "@rbxts/services";

const loadBindable = new Instance("RemoteEvent", ReplicatedStorage);
loadBindable.Name = "LoadMapBindable";

loadBindable.OnServerEvent.Connect((plrName, mapName) => {
	const maps = ServerStorage.FindFirstChild("Maps");
	if (!maps) return;
	const map = maps.FindFirstChild(tostring(mapName));
	if (map && map.IsA("Model")) {
		print(`Found map ${mapName}`);
		map.Parent = Workspace;
		map.PrimaryPart = map.FindFirstChild("Spawn", true) as Part;
	}
});
