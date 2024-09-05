import Roact from "@rbxts/roact";

export function createListPanel(index: number) {
	let panelSize = 32;
	if (index === 1) {
		panelSize = 41;
	} else {
		panelSize = 32;
	}

	const panel = <frame Key={"Panel"}></frame>;

	return panel;
}
