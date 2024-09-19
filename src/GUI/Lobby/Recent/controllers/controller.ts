import { SingleMotor, Spring } from "@rbxts/flipper";

export class flipperController {
	private motor: SingleMotor;
	private motor2: SingleMotor;

	constructor(
		initialValue: number,
		initialValue2: number,
		private updateState: (newUDim2: UDim2) => void,
		private updateState2: (newUDim2: UDim2) => void,
	) {
		this.motor = new SingleMotor(initialValue);
		this.motor.onStep((value) => {
			const newUDim2 = new UDim2(value, 0, 0.769, 0);
			this.updateState(newUDim2);
		});

		this.motor2 = new SingleMotor(initialValue2);
		this.motor2.onStep((value) => {
			const newUDim2 = new UDim2(value, 0, 0, 0);
			this.updateState2(newUDim2);
		});
	}

	public openOptions() {
		this.motor2.setGoal(
			new Spring(0, {
				frequency: 4.5,
				dampingRatio: 1,
			}),
		);
		task.wait(0.08);
		this.motor.setGoal(
			new Spring(0.408, {
				frequency: 3.7,
				dampingRatio: 0.93,
			}),
		);
	}

	public closeOptions() {
		this.motor.setGoal(
			new Spring(0, {
				frequency: 4.5,
				dampingRatio: 1,
			}),
		);
		task.wait(0.05);
		this.motor2.setGoal(
			new Spring(-1, {
				frequency: 3.7,
				dampingRatio: 1,
			}),
		);
	}
}
