import Roact from "@rbxts/roact";

import { Players, UserInputService, TweenService } from "@rbxts/services";
import { createListPanel } from "GUI/Lobby/Recent/CreateListPanel";
import { recentTabGui } from "GUI/Lobby/Recent/RecentTasScreen";
import { GroupMotor, Spring } from "@rbxts/flipper";

Roact.mount(recentTabGui, Players.LocalPlayer.WaitForChild("PlayerGui"));

export enum ViewPorts {
	CREATE,
	LOAD,
	RECENT,
}
const currentView: ViewPorts = ViewPorts.RECENT;

const ViewWrapper = Players.LocalPlayer.WaitForChild("PlayerGui").WaitForChild("RecentTabUi").WaitForChild("Wrapper");

function manipulateFrame(
	frame: Frame,
	TargetSize: { x: number; y: number; springProps: { frequency: number; dampingRatio: number } },
	TargetPosition: { x: number; y: number; springProps: { frequency: number; dampingRatio: number } },
) {
	// motors
	const SizeMotor = new GroupMotor({
		X: frame.Size.X.Scale,
		Y: frame.Size.Y.Scale,
	});
	SizeMotor.onStep((position) => {
		frame.Size = new UDim2(position.X, 0, position.Y, 0);
	});
	const PositionMotor = new GroupMotor({
		X: frame.Position.X.Scale,
		Y: frame.Position.Y.Scale,
	});
	PositionMotor.onStep((position) => {
		frame.Position = new UDim2(position.X, 0, position.Y, 0);
	});
	SizeMotor.setGoal({
		X: new Spring(TargetSize.x, TargetSize.springProps),
		Y: new Spring(TargetSize.y, TargetSize.springProps),
	});
	PositionMotor.setGoal({
		X: new Spring(TargetPosition.x, TargetPosition.springProps),
		Y: new Spring(TargetPosition.y, TargetPosition.springProps),
	});
}

/*(RecentView.FindFirstChild("ControlButtons")?.FindFirstChild("LoadTasButton") as TextButton).MouseButton1Click.Connect(
	() => {
		currentView = ViewPorts.LOAD;
		task.spawn(() => {
			manipulateFrame(
				RecentView as Frame,
				{ x: 0.38, y: 0.45, springProps: { frequency: 4, dampingRatio: 0.85 } },
				{ x: 1.25, y: 0.5, springProps: { frequency: 4, dampingRatio: 0.85 } },
			);
		});
	},
);*/
