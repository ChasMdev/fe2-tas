import { SingleMotor, Spring } from "@rbxts/flipper";

export class flipperController {
	private motor: SingleMotor;

	constructor(
		initialValue: number,
		private updateState: (newUDim2: UDim2) => void,
	) {
		this.motor = new SingleMotor(initialValue);
		this.motor.onStep((value) => {
			const newUDim2 = new UDim2(value, 0, 0.769, 0);
			this.updateState(newUDim2);
		});
	}

	public openOptions() {
		this.motor.setGoal(
			new Spring(0.408, {
				frequency: 4,
				dampingRatio: 0.9,
			}),
		);
	}
	public closeOptions() {
		this.motor.setGoal(
			new Spring(0, {
				frequency: 4,
				dampingRatio: 1,
			}),
		);
	}
	public adjustOptions(size: number) {
		this.motor.setGoal(
			new Spring(size, {
				frequency: 4,
				dampingRatio: 1,
			}),
		);
	}
}
