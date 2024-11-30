import Roact from "@rbxts/roact";

import { Players, UserInputService, TweenService } from "@rbxts/services";
import { createListPanel } from "GUI/Lobby/Recent/CreateListPanel";
import { recentTabGui } from "GUI/Lobby/HomeView";
import { GroupMotor, Spring } from "@rbxts/flipper";

//Roact.mount(recentTabGui, Players.LocalPlayer.WaitForChild("PlayerGui"));

function manipulateFrame(ref: Roact.Ref<Frame>, args: { size: UDim2; pos: UDim2 }) {
	const frame = ref.getValue();
	if (!frame) return;
}
interface values {
	sizeX: number;
	sizeY: number;
	posX: number;
	posY: number;
}
export class flipperController {
	private motor1: GroupMotor<values>;

	constructor(
		initialValues1: values,
		private updateState: (newState: values) => void,
	) {
		this.motor1 = new GroupMotor({
			sizeX: initialValues1.sizeX,
			sizeY: initialValues1.sizeY,
			posX: initialValues1.posX,
			posY: initialValues1.posY,
		});
		this.motor1.onStep((newValues) => {
			this.updateState(newValues);
		});
	}
}

//TESTING AREA REAL!!!!
Roact.mount(
	createListPanel(1, "Long name test very very long name lo ···", "Dec. 29 2023", "A7X9J2B5"),
	Players.LocalPlayer.WaitForChild("PlayerGui")
		.WaitForChild("RecentTabUi")
		.WaitForChild("Wrapper")
		.WaitForChild("RecentView")
		.WaitForChild("List"),
);
Roact.mount(
	createListPanel(2, "Long name test very very long name lo ···", "Dec. 29 2023", "WWWWWWWW"),
	Players.LocalPlayer.WaitForChild("PlayerGui")
		.WaitForChild("RecentTabUi")
		.WaitForChild("Wrapper")
		.WaitForChild("RecentView")
		.WaitForChild("List"),
);
Roact.mount(
	createListPanel(3, "Long name test very very long name lo ···", "Dec. 29 2023", "MMMMMMMM"),
	Players.LocalPlayer.WaitForChild("PlayerGui")
		.WaitForChild("RecentTabUi")
		.WaitForChild("Wrapper")
		.WaitForChild("RecentView")
		.WaitForChild("List"),
);
