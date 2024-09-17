import Roact from "@rbxts/roact";

export function createListPanel(index: number, fileName: string, modifiedDate: string, fileID: string) {
	let panelColor = "#1E1F24";

	if (index % 2 === 0) {
		panelColor = "#101418";
	}

	const panel = (
		<frame
			Key={"Panel"}
			Size={new UDim2(1, 0, 0.123, 0)}
			Position={new UDim2(0, 0, 0.123 * (index - 1), 0)}
			BackgroundColor3={Color3.fromHex(panelColor)}
			LayoutOrder={index}
		>
			<uicorner CornerRadius={new UDim(0, 6)} />
			<imagebutton
				Key={"Extras"}
				AnchorPoint={new Vector2(0, 0.5)}
				BackgroundTransparency={1}
				Size={new UDim2(0.04, 0, 0.624, 0)}
				Position={new UDim2(0.012, 0, 0.5, 0)}
				Image={"rbxassetid://77800512493780"}
				ImageColor3={Color3.fromHex("#C1C6CA")}
			></imagebutton>
			<textlabel
				Key={"Index"}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0, 0.5)}
				Size={new UDim2(0.064, 0, 0.374, 0)}
				Position={new UDim2(0.074, 0, 0.5, 0)}
				FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.Bold)}
				Text={`#${index}`}
				TextScaled={true}
				TextColor3={Color3.fromHex("#3D3F43")}
			/>
			<textlabel
				Key={"fileName"}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0, 0.5)}
				Size={new UDim2(0.383, 0, 0.35, 0)}
				Position={new UDim2(0.167, 0, 0.5, 0)}
				FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
				Text={`${fileName}`}
				TextScaled={true}
				TextColor3={Color3.fromHex("#C1C6CA")}
			/>
			<textlabel
				Key={"modifiedDate"}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0, 0.5)}
				Size={new UDim2(0.163, 0, 0.35, 0)}
				Position={new UDim2(0.564, 0, 0.5, 0)}
				FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
				Text={`${modifiedDate}`}
				TextScaled={true}
				TextColor3={Color3.fromHex("#C1C6CA")}
			/>
			<textbutton
				Key={"fileID"}
				AnchorPoint={new Vector2(0, 0.5)}
				BackgroundColor3={Color3.fromHex("#25272C")}
				Position={new UDim2(0.756, 0, 0.5, 0)}
				Size={new UDim2(0.174, 0, 0.79, 0)}
				Text={""}
			>
				<uicorner CornerRadius={new UDim(0, 4)} />
				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Size={new UDim2(0.542, 0, 0.474, 0)}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
					Text={"T-••••••••"}
					TextScaled={true}
					TextColor3={Color3.fromHex("#C1C6CA")}
				/>
			</textbutton>
			<imagebutton
				Key={"Select"}
				AnchorPoint={new Vector2(0, 0.5)}
				BackgroundTransparency={1}
				Size={new UDim2(0.04, 0, 0.624, 0)}
				Position={new UDim2(0.948, 0, 0.5, 0)}
				Image={"rbxassetid://114751447659442"}
				ImageColor3={Color3.fromHex("#C1C6CA")}
			/>
		</frame>
	);

	return panel;
}
