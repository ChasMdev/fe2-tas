import Roact from "@rbxts/roact";

export const recentTabGui = (
	<screengui Key={"RecentTabUi"} IgnoreGuiInset={true}>
		<frame
			Key={"Wrapper"}
			BackgroundTransparency={1}
			Size={new UDim2(0, 804, 0, 666)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
		>
			{/*<uilistlayout
				Padding={new UDim(0.043, 0)}
				SortOrder={"LayoutOrder"}
				HorizontalAlignment={"Center"}
				VerticalAlignment={"Center"}
			/>*/}
			<frame
				Key={"ControlButtons"}
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundColor3={Color3.fromHex("#101418")}
				Size={new UDim2(0.638, 0, 0.11, 0)}
				Position={new UDim2(0.5, 0, 0, 0)}
				LayoutOrder={1}
			>
				<uicorner CornerRadius={new UDim(0.2, 0)} />
				<textbutton
					Key={"Create"}
					AnchorPoint={new Vector2(0, 0.5)}
					BackgroundColor3={Color3.fromHex("#24DC2C")}
					BackgroundTransparency={0.92}
					Position={new UDim2(0.025, 0, 0.5, 0)}
					Size={new UDim2(0.462, 0, 0.644, 0)}
					Text={""}
				>
					<uicorner CornerRadius={new UDim(0, 6)} />
					<textlabel
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Position={new UDim2(0.38, 0, 0.5, 0)}
						Size={new UDim2(0.456, 0, 0.447, 0)}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.Bold)}
						Text={"Create a TAS"}
						TextColor3={Color3.fromHex("#24DC2C")}
						TextScaled={true}
					/>
					<imagelabel
						Key={"CreateIcon"}
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Position={new UDim2(0.038, 0, 0.5, 0)}
						Size={new UDim2(0.122, 0, 0.617, 0)}
						Image={"rbxassetid://126021324289955"}
						ImageColor3={Color3.fromHex("#24DC2C")}
					/>
				</textbutton>
				<textbutton
					Key={"Load"}
					AnchorPoint={new Vector2(0, 0.5)}
					BackgroundColor3={Color3.fromHex("#4599F5")}
					BackgroundTransparency={0.92}
					Position={new UDim2(0.513, 0, 0.5, 0)}
					Size={new UDim2(0.462, 0, 0.644, 0)}
					Text={""}
				>
					<uicorner CornerRadius={new UDim(0, 6)} />
					<textlabel
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Position={new UDim2(0.38, 0, 0.5, 0)}
						Size={new UDim2(0.456, 0, 0.447, 0)}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.Bold)}
						Text={"Load from ID"}
						TextColor3={Color3.fromHex("#4599F5")}
						TextScaled={true}
					/>
					<imagelabel
						Key={"CreateIcon"}
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Position={new UDim2(0.059, 0, 0.5, 0)}
						Size={new UDim2(0.122, 0, 0.617, 0)}
						Image={"rbxassetid://126269265313308"}
						ImageColor3={Color3.fromHex("#4599F5")}
					/>
				</textbutton>
			</frame>
			{/*VIEWS*/}
			<frame
				Key={"RecentView"}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromHex("#101418")}
				Size={new UDim2(1, 0, 0.694, 0)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				LayoutOrder={2}
			>
				<uicorner CornerRadius={new UDim(0, 18)} />
				<scrollingframe
					Key={"List"}
					BackgroundTransparency={1}
					Position={new UDim2(0.031, 0, 0.1, 0)}
					Size={new UDim2(0.938, 0, 0.846, 0)}
					AutomaticCanvasSize={"Y"}
					CanvasSize={new UDim2(0, 0, 0, 0)}
					ScrollBarThickness={0}
				>
					<uilistlayout SortOrder={"LayoutOrder"} />
				</scrollingframe>
			</frame>
			{/*<frame Key={"LoadView"}></frame>
			<frame Key={"CreateView"}></frame>*/}
			{/*END*/}
			<frame
				Key={"Autosave"}
				AnchorPoint={new Vector2(0.5, 1)}
				BackgroundColor3={Color3.fromHex("#101418")}
				Size={new UDim2(0.876, 0, 0.11, 0)}
				Position={new UDim2(0.5, 0, 1, 0)}
				LayoutOrder={3}
			></frame>
		</frame>
	</screengui>
);
