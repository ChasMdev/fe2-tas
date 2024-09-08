import Roact from "@rbxts/roact";

import { Players } from "@rbxts/services";
import { createListPanel } from "GUI/Lobby/Recent/CreateListPanel";
import { recentTabGui } from "GUI/Lobby/Recent/RecentTasScreen";

Roact.mount(recentTabGui, Players.LocalPlayer.WaitForChild("PlayerGui"));
/*Roact.mount(
	createListPanel(1, "Forsaken Era", "9/10/2017", "7/30/2024", 83),
	Players.LocalPlayer.WaitForChild("PlayerGui")
		.WaitForChild("RecentTabUi")
		.WaitForChild("Wrapper")
		.WaitForChild("MainFrame")
		.WaitForChild("Panels")
		.WaitForChild("List"),
);*/
