# How to use Manager.client.ts

Mount the initial GUI with ```ts
Roact.mount(recentTabGui, Players.LocalPlayer.WaitForChild("PlayerGui"));```

To add the Recent TAS Panels, use 
```
Roact.mount(
	createListPanel(index, mapName, CreationDate, ModifiedDate, Percentage),
	Players.LocalPlayer.WaitForChild("PlayerGui")
		.WaitForChild("RecentTabUi")
		.WaitForChild("Wrapper")
		.WaitForChild("MainFrame")
		.WaitForChild("Panels")
		.WaitForChild("List"),
);
``` 
in a loop, where `index` is the position (vertically) in the list, `mapName` is the name of the map, or the TAS name, `CreationDate` is the date of TAS creation, `ModifiedDate` is the date of the last modification to the file and `Percentage` is the percentage of how many buttons are pressed out of the total.