import Roact from "@rbxts/roact";

export function createListPanel(
	index: number,
	mapName: string,
	creationDate: string,
	modifiedDate: string,
	complete: number,
) {
	let panelSize = 32;
	let panelColor = "#0E1014";
	let corner = 0;
	if (index === 1) {
		panelSize = 41;
		corner = 6;
	}

	if (index % 2 === 0) {
		panelColor = "#1A1C22";
	}

	const panel = (
		<frame
			Key={"Panel"}
			Size={new UDim2(1, 0, 0, panelSize)}
			Position={new UDim2(0, 0, 0, (index - 1) * 32)}
			BackgroundColor3={Color3.fromHex(panelColor)}
			ZIndex={index}
		>
			<textlabel
				Key={"MapName"}
				Size={new UDim2(0.106, 0, 0, 16)}
				Position={new UDim2(0.012, 0, 0, 8)}
				Text={mapName}
				FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
				TextColor3={Color3.fromHex("#EBEBEB")}
				BackgroundTransparency={1}
				TextSize={13}
				TextXAlignment={"Left"}
				ZIndex={index}
			/>
			<textlabel
				Key={"CreationDate"}
				Size={new UDim2(0.106, 0, 0, 16)}
				Position={new UDim2(0.365, 0, 0, 8)}
				Text={creationDate}
				FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
				TextColor3={Color3.fromHex("#EBEBEB")}
				BackgroundTransparency={1}
				TextSize={13}
				TextXAlignment={"Left"}
				ZIndex={index}
			/>
			<textlabel
				Key={"ModifiedDate"}
				Size={new UDim2(0.1, 0, 0, 16)}
				Position={new UDim2(0.5, 0, 0, 8)}
				Text={modifiedDate}
				FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
				TextColor3={Color3.fromHex("#EBEBEB")}
				BackgroundTransparency={1}
				TextSize={13}
				TextXAlignment={"Left"}
				ZIndex={index}
			/>
			<textlabel
				Key={"Completed"}
				Size={new UDim2(0.12, 0, 0, 16)}
				Position={new UDim2(0.667, 0, 0, 8)}
				Text={`${complete}% Complete`}
				FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
				TextColor3={Color3.fromHex("#EBEBEB")}
				BackgroundTransparency={1}
				TextSize={13}
				TextXAlignment={"Left"}
				ZIndex={index}
			/>
			<uicorner CornerRadius={new UDim(0, corner)} />
			<textbutton
				Key={"Delete"}
				Size={new UDim2(0, 24, 0, 24)}
				Position={new UDim2(0.927, 0, 0, 4)}
				Text={""}
				BackgroundColor3={Color3.fromHex("#14161B")}
				ZIndex={index}
			>
				<uicorner CornerRadius={new UDim(0, 3)} />
				<imagelabel
					Key={"Icon"}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Size={new UDim2(0.833, 0, 0.833, 0)}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					BackgroundTransparency={1}
					Image={"rbxassetid://127086072451757"}
					ZIndex={index}
				/>
			</textbutton>
			<textbutton
				Key={"Select"}
				Size={new UDim2(0, 24, 0, 24)}
				Position={new UDim2(0.964, 0, 0, 4)}
				Text={""}
				BackgroundColor3={Color3.fromHex("#14161B")}
				ZIndex={index}
			>
				<uicorner CornerRadius={new UDim(0, 3)} />
				<imagelabel
					Key={"Icon"}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Size={new UDim2(0.833, 0, 0.833, 0)}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					BackgroundTransparency={1}
					Image={"rbxassetid://114751447659442"}
					ZIndex={index}
				/>
			</textbutton>
		</frame>
	);

	return panel;
}
