import Roact from "@rbxts/roact";

export const LoadingGameWrapper = (
	<screengui Key={"LoadingGameWrapper"}>
		<frame
			Key={"Background"}
			BorderSizePixel={0}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Size={new UDim2(0.19, 0, 0.149, 0)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			BackgroundColor3={Color3.fromHex("#0B0D12")}
		>
			<uicorner CornerRadius={new UDim(0, 10)} />
			<uistroke Color={Color3.fromHex("#1B1E24")} Thickness={2} />
			<textlabel
				Key={"Title"}
				Font={"GothamBold"}
				Size={new UDim2(0.411, 0, 0.177, 0)}
				Position={new UDim2(0.038, 0, 0.328, 0)}
				Text={"Loading game"}
				TextColor3={Color3.fromHex("#EBEBEB")}
				TextScaled={true}
				TextYAlignment={"Center"}
				TextXAlignment={"Left"}
				BackgroundTransparency={1}
			/>
			<textlabel
				Key={"LoadingPercentage"}
				Font={"GothamBold"}
				FontSize={"Size12"}
				Size={new UDim2(0.088, 0, 0.093, 0)}
				Position={new UDim2(0.853, 0, 0.404, 0)}
				Text={"0%"}
				TextColor3={Color3.fromHex("#EBEBEB")}
				TextXAlignment={"Right"}
				TextYAlignment={"Center"}
				BackgroundTransparency={1}
			/>
			<textlabel
				Key={"LoadingAsset"}
				Font={"GothamBold"}
				FontSize={"Size12"}
				Size={new UDim2(0.73, 0, 0.093, 0)}
				Position={new UDim2(0.038, 0, 0.59, 0)}
				Text={"Loading:"}
				TextColor3={Color3.fromHex("#949494")}
				TextXAlignment={"Left"}
				TextYAlignment={"Center"}
				BackgroundTransparency={1}
			/>
			<textlabel
				Key={"TotalAssets"}
				Font={"GothamBold"}
				FontSize={"Size12"}
				Size={new UDim2(0.088, 0, 0.093, 0)}
				Position={new UDim2(0.853, 0, 0.59, 0)}
				Text={"0/0"}
				TextColor3={Color3.fromHex("#949494")}
				TextXAlignment={"Right"}
				TextYAlignment={"Center"}
				BackgroundTransparency={1}
			/>
			<frame
				Key={"LoadingBarWrapper"}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0.5, 0)}
				Size={new UDim2(0.927, 0, 0.05, 0)}
				Position={new UDim2(0.5, 0, 0.51, 0)}
			>
				<frame
					Key={"LoadingBar"}
					BorderSizePixel={0}
					Size={new UDim2(0, 0, 1, 0)}
					Position={new UDim2(0, 0, 0, 0)}
					BackgroundColor3={Color3.fromHex("#1B1E24")}
				>
					<uicorner CornerRadius={new UDim(0, 4)} />
				</frame>
			</frame>
		</frame>
	</screengui>
);
