import Roact from "@rbxts/roact";

export const recentTabGui = (
	<screengui Key={"RecentTabUi"}>
		<frame
			Key={"Wrapper"}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0.419, 0, 0.496, 0)}
			BackgroundTransparency={1}
		>
			<frame
				Key={"ControlButtons"}
				AnchorPoint={new Vector2(0.5, 0)}
				Position={new UDim2(0.5, 0, 0, 0)}
				Size={new UDim2(0.445, 0, 0.114, 0)}
				BackgroundColor3={Color3.fromHex("#0B0D12")}
			>
				<uicorner CornerRadius={new UDim(0, 10)} />
				<textbutton
					Key={"LoadTasButton"}
					AnchorPoint={new Vector2(0, 0.5)}
					Text={""}
					Size={new UDim2(0.466, 0, 0.738, 0)}
					Position={new UDim2(0.022, 0, 0.5, 0)}
					BackgroundColor3={Color3.fromHex("#181A20")}
				>
					<uicorner CornerRadius={new UDim(0, 5)} />
					<uistroke ApplyStrokeMode={"Border"} Thickness={2} Color={Color3.fromHex("#22252D")} />
					<textlabel
						Text={"Load TAS"}
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Font={"GothamBold"}
						TextSize={16}
						TextColor3={Color3.fromHex("#EBEBEB")}
						Position={new UDim2(0.401, 0, 0.5, 0)}
						Size={new UDim2(0.437, 0, 0.422, 0)}
					/>
					<imagelabel
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Position={new UDim2(0.084, 0, 0.5, 0)}
						Size={new UDim2(0.15, 0, 0.556, 0)}
						Image={"rbxassetid://126269265313308"}
					/>
				</textbutton>
				<textbutton
					Key={"NewTasButton"}
					AnchorPoint={new Vector2(0, 0.5)}
					Text={""}
					Size={new UDim2(0.466, 0, 0.738, 0)}
					Position={new UDim2(0.511, 0, 0.5, 0)}
					BackgroundColor3={Color3.fromHex("#181A20")}
				>
					<uicorner CornerRadius={new UDim(0, 5)} />
					<uistroke ApplyStrokeMode={"Border"} Thickness={2} Color={Color3.fromHex("#22252D")} />
					<textlabel
						Text={"New TAS"}
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Font={"GothamBold"}
						TextSize={16}
						TextColor3={Color3.fromHex("#EBEBEB")}
						Position={new UDim2(0.401, 0, 0.5, 0)}
						Size={new UDim2(0.437, 0, 0.422, 0)}
					/>
					<imagelabel
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Position={new UDim2(0.084, 0, 0.5, 0)}
						Size={new UDim2(0.15, 0, 0.556, 0)}
						Image={"rbxassetid://126021324289955"}
					/>
				</textbutton>
			</frame>
			<frame
				Key={"MainFrame"}
				AnchorPoint={new Vector2(0.5, 1)}
				Position={new UDim2(0.5, 0, 1, 0)}
				Size={new UDim2(1, 0, 0.862, 0)}
				BackgroundColor3={Color3.fromHex("#0B0D12")}
			>
				<uicorner CornerRadius={new UDim(0, 10)} />
			</frame>
		</frame>
	</screengui>
);
