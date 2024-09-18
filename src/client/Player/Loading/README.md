# How to use Manager.client.ts

Mount the initial GUI with
```ts
Roact.mount(recentTabGui, Players.LocalPlayer.WaitForChild("PlayerGui"));
```

To add the Recent TAS Panels, use
```ts
Roact.mount(
	createListPanel(index, fileName, modifiedDate, fileID),
	Players.LocalPlayer.WaitForChild("PlayerGui")
		.WaitForChild("RecentTabUi")
		.WaitForChild("Wrapper")
		.WaitForChild("RecentView")
		.WaitForChild("List")
);
```
in a loop, where `index` is the position (vertically) in the list, `fileName` is the name of the TAS File, `ModifiedDate` is the date of the last modification to the file and `fileID` is the TAS ID (T-••••••••) of the file used for sharing.
