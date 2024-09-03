import Roact from "@rbxts/roact";

import { Players } from "@rbxts/services";
import { recentTabGui } from "GUI/Lobby/Recent/RecentTasScreen";

task.wait(1)
Roact.mount(recentTabGui, Players.LocalPlayer.WaitForChild("PlayerGui"))