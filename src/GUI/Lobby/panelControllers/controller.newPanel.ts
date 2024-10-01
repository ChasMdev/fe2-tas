import { GroupMotor, Spring } from "@rbxts/flipper";
import { views, ViewPorts } from "./vars";

export class newPanelControl {
	private positionMotor: GroupMotor<{ posX: number; posY: number }>;
	private sizeMotor: GroupMotor<{ sizeX: number; sizeY: number }>;

	constructor(
		initialPosition: { posX: number; posY: number },
		initialSize: { sizeX: number; sizeY: number },
		private updateSizeState: (newSizeState: UDim2) => void,
		private updatePosState: (newPosState: UDim2) => void,
	) {
		this.positionMotor = new GroupMotor(initialPosition);
		this.sizeMotor = new GroupMotor(initialSize);

		this.positionMotor.onStep((values) => {
			const newPos = new UDim2(values.posX, 0, values.posY, 0);
			this.updatePosState(newPos);
		});

		this.sizeMotor.onStep((values) => {
			const newSize = new UDim2(values.sizeX, 0, values.sizeY, 0);
			this.updateSizeState(newSize);
		});
	}

	public moveNewPanel(
		newPosition: { posX: number; posY: number },
		newSize: { sizeX: number; sizeY: number },
		springProps: { frequency: number; dampingRatio: number },
		visible: boolean,
	) {
		if (visible) {
			views.CurrentView = ViewPorts.CREATE;
			task.wait(0.07);
			this.positionMotor.setGoal({
				posX: new Spring(newPosition.posX, { frequency: 4, dampingRatio: 0.9 }),
				posY: new Spring(newPosition.posY, { frequency: 4, dampingRatio: 0.9 }),
			});
			task.spawn(() => {
				task.wait(0.04); // need to set arbitrary time (when position almost finishes)
				this.sizeMotor.setGoal({
					sizeX: new Spring(newSize.sizeX, { frequency: 4, dampingRatio: 0.97 }),
					sizeY: new Spring(newSize.sizeY, { frequency: 4, dampingRatio: 0.97 }),
				});
			});
		} else {
			this.sizeMotor.setGoal({
				sizeX: new Spring(newSize.sizeX, { frequency: 4, dampingRatio: 0.97 }),
				sizeY: new Spring(newSize.sizeY, { frequency: 4, dampingRatio: 0.97 }),
			});
			task.spawn(() => {
				task.wait(0.04); // need to set arbitrary time (when position almost finishes)
				this.positionMotor.setGoal({
					posX: new Spring(newPosition.posX, { frequency: 4, dampingRatio: 0.9 }),
					posY: new Spring(newPosition.posY, { frequency: 4, dampingRatio: 0.9 }),
				});
			});
		}
	}
}
