import Roact from "@rbxts/roact";

export const GameGUI = (
	<screengui Key={"GameGUI"}>
		<frame
			Key={"HUD"}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Size={new UDim2(1, 0, 0.075, 0)}
			Position={new UDim2(0.5, 0, 0.89, 0)}
			BackgroundColor3={Color3.fromRGB(22, 31, 40)}
			ZIndex={1}
			SizeConstraint={"RelativeYY"}
			BorderSizePixel={0}
		>
			<frame
				Key={"MenuButtons"}
				Size={new UDim2(0.3, 0, 1, 0)}
				Position={new UDim2(0, 0, 0, 0)}
				BackgroundColor3={Color3.fromRGB(0, 170, 255)}
				ZIndex={1}
				BorderSizePixel={0}
			>
				<imagelabel
					Key={"Fade"}
					Size={new UDim2(0.03, 0, 1, 0)}
					Position={new UDim2(1, 0, 0, 0)}
					BackgroundTransparency={1}
					Image={"rbxassetid://1463504275"}
					ImageColor3={new Color3(0, 0, 0)}
					ZIndex={3}
					BorderSizePixel={0}
				/>
				<frame
					Key={"Content"}
					BackgroundTransparency={1}
					Size={new UDim2(1, 0, 1, 0)}
					Position={new UDim2(0, 0, 0, 0)}
					ZIndex={1}
					BorderSizePixel={0}
				>
					<uigridlayout
						CellSize={new UDim2(1 / 3, 0, 1, 0)}
						CellPadding={new UDim2(0, 0, 0, 0)}
						FillDirection={"Horizontal"}
						SortOrder={"Name"}
						StartCorner={"TopLeft"}
						VerticalAlignment={"Top"}
						HorizontalAlignment={"Right"}
					/>
					<imagebutton
						Key={"OpenList"}
						ImageTransparency={0.75}
						BackgroundColor3={Color3.fromRGB(0, 170, 255)}
						Size={new UDim2(1 / 3, 0, 1, 0)}
						Image={"rbxassetid://156579757"}
						BorderSizePixel={0}
					>
						<imagelabel
							Key={"Icon"}
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={1}
							Size={new UDim2(0.9, 0, 0.9, 0)}
							Position={new UDim2(0.5, 0, 0.5, 0)}
							Image={"rbxassetid://275852110"}
							ImageColor3={new Color3(0, 0, 0)}
							Rotation={-90}
							ScaleType={"Fit"}
							BorderSizePixel={0}
						/>
					</imagebutton>
					<imagebutton
						Key={"MenuSpectate"}
						ImageTransparency={0.75}
						BackgroundColor3={Color3.fromRGB(0, 170, 255)}
						Size={new UDim2(1 / 3, 0, 1, 0)}
						Image={"rbxassetid://156579757"}
						BorderSizePixel={0}
					>
						<imagelabel
							Key={"Icon"}
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={1}
							Size={new UDim2(0.9, 0, 0.9, 0)}
							Position={new UDim2(0.5, 0, 0.5, 0)}
							Image={"rbxassetid://1055077521"}
							ImageColor3={new Color3(0, 0, 0)}
							ScaleType={"Fit"}
							BorderSizePixel={0}
						/>
					</imagebutton>
					<imagebutton
						Key={"MenuShop"}
						ImageTransparency={0.75}
						BackgroundColor3={Color3.fromRGB(0, 170, 255)}
						Size={new UDim2(1 / 3, 0, 1, 0)}
						Image={"rbxassetid://156579757"}
						BorderSizePixel={0}
					>
						<imagelabel
							Key={"Icon"}
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={1}
							Size={new UDim2(0.9, 0, 0.9, 0)}
							Position={new UDim2(0.5, 0, 0.5, 0)}
							Image={"rbxassetid://1055077607"}
							ImageColor3={new Color3(0, 0, 0)}
							ScaleType={"Fit"}
							BorderSizePixel={0}
						/>
					</imagebutton>
				</frame>
			</frame>
			<frame
				Key={"Border"}
				BackgroundTransparency={1}
				Size={new UDim2(1, 0, 1, 0)}
				Position={new UDim2(0, 0, 0, 0)}
				ZIndex={3}
				BorderSizePixel={0}
			>
				<imagelabel
					Key={"TopLeft"}
					BackgroundTransparency={1}
					AnchorPoint={new Vector2(0.21, 0.21)}
					Image={"rbxassetid://2923917750"}
					ImageColor3={Color3.fromRGB(22, 31, 40)}
					Size={new UDim2(0.9, 0, 0.9, 0)}
					Position={new UDim2(0, 0, 0, 0)}
					ScaleType={"Stretch"}
					Rotation={0}
					ZIndex={10}
					SizeConstraint={"RelativeYY"}
					BorderSizePixel={0}
				/>
				<imagelabel
					Key={"TopRight"}
					BackgroundTransparency={1}
					AnchorPoint={new Vector2(0.79, 0.21)}
					Image={"rbxassetid://2923917750"}
					ImageColor3={Color3.fromRGB(22, 31, 40)}
					Size={new UDim2(0.9, 0, 0.9, 0)}
					Position={new UDim2(1, 0, 0, 0)}
					ScaleType={"Stretch"}
					Rotation={90}
					ZIndex={10}
					SizeConstraint={"RelativeYY"}
					BorderSizePixel={0}
				/>
				<imagelabel
					Key={"BottomLeft"}
					BackgroundTransparency={1}
					AnchorPoint={new Vector2(0.21, 0.79)}
					Image={"rbxassetid://2923917750"}
					ImageColor3={Color3.fromRGB(22, 31, 40)}
					Size={new UDim2(0.9, 0, 0.9, 0)}
					Position={new UDim2(0, 0, 1, 0)}
					ScaleType={"Stretch"}
					Rotation={-90}
					ZIndex={10}
					SizeConstraint={"RelativeYY"}
					BorderSizePixel={0}
				/>
				<imagelabel
					Key={"BottomRight"}
					BackgroundTransparency={1}
					AnchorPoint={new Vector2(0.79, 0.79)}
					Image={"rbxassetid://2923917750"}
					ImageColor3={Color3.fromRGB(22, 31, 40)}
					Size={new UDim2(0.9, 0, 0.9, 0)}
					Position={new UDim2(1, 0, 1, 0)}
					ScaleType={"Stretch"}
					Rotation={180}
					ZIndex={10}
					SizeConstraint={"RelativeYY"}
					BorderSizePixel={0}
				/>
			</frame>
			<frame
				Key={"BorderLine"}
				BackgroundTransparency={1}
				Size={new UDim2(1, 0, 1.26, 0)}
				Position={new UDim2(0, 0, -0.13, 0)}
				ZIndex={-1}
				BorderSizePixel={0}
			>
				<frame
					Key={"BottomLine"}
					AnchorPoint={new Vector2(0.5, 0)}
					BackgroundColor3={new Color3(0, 0, 0)}
					BackgroundTransparency={0.5}
					Size={new UDim2(0.92, 0, 0.2, 0)}
					Position={new UDim2(0.5, 0, 0.8, 0)}
					ZIndex={-1}
					BorderSizePixel={0}
				/>
				<frame
					Key={"TopLine"}
					AnchorPoint={new Vector2(0.5, 0)}
					BackgroundColor3={new Color3(0, 0, 0)}
					BackgroundTransparency={0.5}
					Size={new UDim2(0.92, 0, 0.2, 0)}
					Position={new UDim2(0.5, 0, 0, 0)}
					ZIndex={-1}
					BorderSizePixel={0}
				/>
			</frame>
			<textlabel
				Key={"GameStats"}
				BackgroundTransparency={0.6}
				BackgroundColor3={new Color3(0, 0, 0)}
				Size={new UDim2(0.7, 0, 1, 0)}
				Position={new UDim2(0.3, 0, 0, 0)}
				Text={""}
				BorderSizePixel={0}
				ZIndex={1}
			>
				<frame
					Key={"Ingame"}
					BackgroundTransparency={1}
					BorderSizePixel={0}
					Size={new UDim2(1, 0, 1, 0)}
					Position={new UDim2(0, 0, 0, 0)}
					ZIndex={1}
				>
					<frame
						Key={"AirBars"}
						BorderSizePixel={0}
						BackgroundTransparency={1}
						Size={new UDim2(1, 0, 0.25, 0)}
						Position={new UDim2(0, 0, 0, 0)}
						ZIndex={1}
					>
						<imagelabel
							Key={"AirDirection"}
							BorderSizePixel={0}
							BackgroundTransparency={1}
							AnchorPoint={new Vector2(0.5, 0.5)}
							Image={"rbxassetid://6399401493"}
							ImageColor3={new Color3(0, 0, 0)}
							ImageTransparency={0.62}
							Size={new UDim2(1, 0, 37.5, 0)}
							Position={new UDim2(0.5, 0, 0.5, 0)}
							ZIndex={2}
						/>
						<textlabel
							Key={"AirDirection"}
							BorderSizePixel={0}
							BackgroundTransparency={1}
							AnchorPoint={new Vector2(0.5, 0)}
							Size={new UDim2(0.96, 0, 1, 0)}
							Position={new UDim2(0.5, 0, 0, 0)}
							Font={"Highway"}
							Text={"-0/s"}
							TextXAlignment={"Left"}
							TextColor3={new Color3(1, 1, 1)}
							TextScaled={true}
							TextStrokeColor3={new Color3(0, 0, 0)}
							TextStrokeTransparency={0.62}
							ZIndex={3}
						/>
						<imagelabel
							Key={"TankBar"}
							BorderSizePixel={0}
							BackgroundTransparency={1}
							Image={""}
							Size={new UDim2(1, 0, 1, 0)}
							Position={new UDim2(0, 0, 0, 0)}
							ZIndex={2}
						>
							<frame
								Key={"Percentage"}
								BorderSizePixel={0}
								BackgroundColor3={Color3.fromRGB(128, 213, 255)}
								Size={new UDim2(0, 0, 1, 0)}
								Position={new UDim2(0, 0, 0, 0)}
								ZIndex={2}
							/>
							<imagelabel
								Key={"Gradient"}
								BorderSizePixel={0}
								BackgroundTransparency={1}
								Image={"rbxassetid://156579757"}
								ImageTransparency={0.6}
								Size={new UDim2(1, 0, 0.5, 0)}
								Position={new UDim2(0, 0, 0.5, 0)}
								ZIndex={3}
							/>
							<frame
								Key={"Temp"}
								BorderSizePixel={0}
								BackgroundColor3={Color3.fromRGB(150, 43, 33)}
								Size={new UDim2(0, 0, 1, 0)}
								Position={new UDim2(0, 0, 0, 0)}
								ZIndex={1}
							/>
						</imagelabel>
						<imagelabel
							Key={"BasicBar"}
							BorderSizePixel={0}
							BackgroundColor3={Color3.fromRGB(44, 62, 80)}
							Image={""}
							Size={new UDim2(1, 0, 1, 0)}
							Position={new UDim2(0, 0, 0, 0)}
							ZIndex={1}
						>
							<frame
								Key={"Percentage"}
								BorderSizePixel={0}
								BackgroundColor3={Color3.fromRGB(0, 174, 255)}
								Size={new UDim2(1, 0, 1, 0)}
								Position={new UDim2(0, 0, 0, 0)}
								ZIndex={2}
							/>
							<imagelabel
								Key={"Gradient"}
								BorderSizePixel={0}
								BackgroundTransparency={1}
								Image={"rbxassetid://156579757"}
								ImageTransparency={0.6}
								Size={new UDim2(1, 0, 0.5, 0)}
								Position={new UDim2(0, 0, 0.5, 0)}
								ZIndex={3}
							/>
							<frame
								Key={"Temp"}
								BorderSizePixel={0}
								BackgroundColor3={Color3.fromRGB(192, 57, 43)}
								Size={new UDim2(1, 0, 1, 0)}
								Position={new UDim2(0, 0, 0, 0)}
								ZIndex={1}
							/>
						</imagelabel>
					</frame>
					<frame
						Key={"Info"}
						BorderSizePixel={0}
						BackgroundTransparency={1}
						Size={new UDim2(1, 0, 0.75, 0)}
						Position={new UDim2(0, 0, 0.25, 0)}
						ZIndex={1}
					>
						<uilistlayout
							Padding={new UDim(0, 0)}
							FillDirection={"Horizontal"}
							HorizontalAlignment={"Left"}
							VerticalAlignment={"Top"}
							SortOrder={"LayoutOrder"}
						/>
						<frame
							Key={"Buttons"}
							BorderSizePixel={0}
							BackgroundTransparency={1}
							Size={new UDim2(0.175, 0, 1, 0)}
							ZIndex={2}
							LayoutOrder={4}
						>
							<textlabel
								Key={"Count"}
								BorderSizePixel={0}
								BackgroundTransparency={1}
								Font={"Highway"}
								TextScaled={true}
								TextColor3={new Color3(1, 1, 1)}
								TextStrokeColor3={new Color3(0, 0, 0)}
								TextStrokeTransparency={0.65}
								Text={"✅"}
								TextXAlignment={"Center"}
								TextYAlignment={"Center"}
								Size={new UDim2(0.5, 0, 1, 0)}
								Position={new UDim2(0.5, 0, 0, 0)}
								ZIndex={2}
							></textlabel>
							<frame
								Key={"ButtonIcon"}
								BorderSizePixel={0}
								AnchorPoint={new Vector2(0, 0.5)}
								BackgroundTransparency={1}
								Size={new UDim2(0.5, 0, 0.9, 0)}
								Position={new UDim2(0, 0, 0.5, 0)}
								ZIndex={2}
							>
								<frame
									Key={"Background"}
									BorderSizePixel={0}
									AnchorPoint={new Vector2(0.5, 0.5)}
									BackgroundColor3={new Color3(0, 0, 0)}
									BackgroundTransparency={0.6}
									Size={new UDim2(0.83, 0, 0.83, 0)}
									SizeConstraint={"RelativeYY"}
									Position={new UDim2(0.5, 0, 0.5, 0)}
									ZIndex={3}
								/>
								<imagelabel
									Key={"Border"}
									BorderSizePixel={0}
									AnchorPoint={new Vector2(0.5, 0.5)}
									BackgroundTransparency={1}
									Image={"rbxassetid://2192707592"}
									ScaleType={"Fit"}
									Size={new UDim2(1, 0, 1, 0)}
									Position={new UDim2(0.5, 0, 0.5, 0)}
									ZIndex={3}
								/>
								<imagelabel
									Key={"Middle"}
									BorderSizePixel={0}
									AnchorPoint={new Vector2(0.5, 0.5)}
									BackgroundTransparency={1}
									Image={"rbxassetid://2192707404"}
									ImageRectSize={new Vector2(128, 128)}
									Size={new UDim2(0.7, 0, 0.7, 0)}
									Position={new UDim2(0.5, 0, 0.5, 0)}
									ZIndex={3}
								/>
							</frame>
						</frame>
						<frame
							Key={"Air"}
							BorderSizePixel={0}
							BackgroundTransparency={1}
							Size={new UDim2(0.3, 0, 1, 0)}
							ZIndex={1}
							LayoutOrder={1}
						>
							<textlabel
								Key={"Count"}
								BorderSizePixel={0}
								BackgroundTransparency={1}
								Font={"Highway"}
								TextScaled={true}
								TextColor3={new Color3(1, 1, 1)}
								TextStrokeColor3={new Color3(0, 0, 0)}
								TextStrokeTransparency={0.65}
								Text={"100%"}
								TextXAlignment={"Center"}
								TextYAlignment={"Center"}
								Size={new UDim2(0.6, 0, 1, 0)}
								Position={new UDim2(0.4, 0, 0, 0)}
								ZIndex={1}
							/>
							<frame
								Key={"AirIcons"}
								BorderSizePixel={0}
								AnchorPoint={new Vector2(0, 0.5)}
								BackgroundTransparency={1}
								Size={new UDim2(0.35, 0, 0.9, 0)}
								Position={new UDim2(0, 0, 0.5, 0)}
								ZIndex={1}
							>
								<imagelabel
									Key={"Standard"}
									BorderSizePixel={0}
									BackgroundTransparency={1}
									Image={"rbxassetid://7028899420"}
									ScaleType={"Fit"}
									Size={new UDim2(1, 0, 1, 0)}
									Position={new UDim2(0, 0, 0, 0)}
									ZIndex={2}
								/>
								<imagelabel
									Key={"Danger"}
									BorderSizePixel={0}
									BackgroundTransparency={1}
									Image={"rbxassetid://7028899420"} // wrong Icon
									ScaleType={"Fit"}
									Size={new UDim2(1, 0, 1, 0)}
									Position={new UDim2(0, 0, 0, 0)}
									ZIndex={2}
									Visible={false}
								/>
							</frame>
						</frame>
						<frame
							Key={"Time"}
							BorderSizePixel={0}
							BackgroundTransparency={1}
							Size={new UDim2(0.35, 0, 1, 0)}
							ZIndex={1}
							LayoutOrder={2}
						>
							<textlabel
								Key={"Count"}
								BorderSizePixel={0}
								BackgroundTransparency={1}
								Font={"Highway"}
								TextScaled={true}
								TextColor3={new Color3(1, 1, 1)}
								TextStrokeColor3={new Color3(0, 0, 0)}
								TextStrokeTransparency={0.65}
								Text={"0:00.00"}
								TextXAlignment={"Center"}
								TextYAlignment={"Center"}
								Size={new UDim2(0.75, 0, 1, 0)}
								Position={new UDim2(0.25, 0, 0, 0)}
								ZIndex={2}
							/>
							<imagelabel
								Key={"TimeIcon"}
								BorderSizePixel={0}
								BackgroundTransparency={1}
								Image={"rbxassetid://7028993786"}
								Size={new UDim2(0.25, 0, 1, 0)}
								Position={new UDim2(0, 0, 0, 0)}
								ScaleType={"Fit"}
								ZIndex={2}
							/>
						</frame>
						<frame
							Key={"PlayerCount"}
							BorderSizePixel={0}
							BackgroundTransparency={1}
							Size={new UDim2(0.175, 0, 1, 0)}
							ZIndex={1}
							LayoutOrder={3}
						>
							<textlabel
								Key={"Count"}
								BorderSizePixel={0}
								BackgroundTransparency={1}
								Font={"Highway"}
								TextScaled={true}
								TextColor3={new Color3(1, 1, 1)}
								TextStrokeColor3={new Color3(0, 0, 0)}
								TextStrokeTransparency={0.65}
								Text={"0"}
								TextXAlignment={"Center"}
								TextYAlignment={"Center"}
								Size={new UDim2(0.5, 0, 1, 0)}
								Position={new UDim2(0.5, 0, 0, 0)}
								ZIndex={2}
							/>
							<imagelabel
								Key={"PlayerIcon"}
								BorderSizePixel={0}
								BackgroundTransparency={1}
								Image={"rbxassetid://4078197699"}
								Size={new UDim2(0.5, 0, 1, 0)}
								Position={new UDim2(0, 0, 0, 0)}
								ScaleType={"Fit"}
								ZIndex={2}
							/>
						</frame>
					</frame>
				</frame>
			</textlabel>
		</frame>
	</screengui>
);
