import Roact from "@rbxts/roact";

export const recentTabGui = (
	<screengui Key={"RecentTabUi"} IgnoreGuiInset={true}>
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
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.Bold)}
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
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.Bold)}
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
				<textlabel
					Key={"Title"}
					Size={new UDim2(0.184, 0, 0.061, 0)}
					Position={new UDim2(0.02, 0, 0.022, 0)}
					Text={"Recent TASes"}
					FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.Bold)}
					TextColor3={Color3.fromHex("#EBEBEB")}
					BackgroundTransparency={1}
					TextSize={22}
					TextXAlignment={"Left"}
				/>
				<textlabel
					Key={"Continue"}
					Size={new UDim2(0.088, 0, 0.041, 0)}
					Position={new UDim2(0.02, 0, 0.838, 0)}
					Text={"Continue"}
					FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.Bold)}
					TextColor3={Color3.fromHex("#EBEBEB")}
					BackgroundTransparency={1}
					TextSize={16}
					TextXAlignment={"Left"}
				/>
				<frame
					Key={"ContinuePanel"}
					Size={new UDim2(0.959, 0, 0.069, 0)}
					Position={new UDim2(0.5, 0, 0.896, 0)}
					AnchorPoint={new Vector2(0.5, 0)}
					BackgroundColor3={Color3.fromHex("#14161B")}
				>
					<uistroke ApplyStrokeMode={"Contextual"} Thickness={1.5} Color={Color3.fromHex("#1B1E24")} />
					<uicorner CornerRadius={new UDim(0, 5)} />
					<textlabel
						Key={"MapName"}
						Size={new UDim2(0.106, 0, 0.5, 0)}
						Position={new UDim2(0.012, 0, 0.25, 0)}
						Text={"Unknown"}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						TextColor3={Color3.fromHex("#EBEBEB")}
						BackgroundTransparency={1}
						TextSize={13}
						TextXAlignment={"Left"}
					/>
					<textlabel
						Key={"CreationDate"}
						Size={new UDim2(0.106, 0, 0.5, 0)}
						Position={new UDim2(0.365, 0, 0.25, 0)}
						Text={"Unknown"}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						TextColor3={Color3.fromHex("#EBEBEB")}
						BackgroundTransparency={1}
						TextSize={13}
						TextXAlignment={"Left"}
					/>
					<textlabel
						Key={"ModifiedDate"}
						Size={new UDim2(0.1, 0, 0.5, 0)}
						Position={new UDim2(0.5, 0, 0.25, 0)}
						Text={"Unknown"}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						TextColor3={Color3.fromHex("#EBEBEB")}
						BackgroundTransparency={1}
						TextSize={13}
						TextXAlignment={"Left"}
					/>
					<textlabel
						Key={"Completed"}
						Size={new UDim2(0.12, 0, 0.5, 0)}
						Position={new UDim2(0.667, 0, 0.25, 0)}
						Text={"Unknown"}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						TextColor3={Color3.fromHex("#EBEBEB")}
						BackgroundTransparency={1}
						TextSize={13}
						TextXAlignment={"Left"}
					/>
					<textbutton
						Key={"Delete"}
						AnchorPoint={new Vector2(0, 0.5)}
						Size={new UDim2(0.031, 0, 0.75, 0)}
						Position={new UDim2(0.927, 0, 0.5, 0)}
						Text={""}
						BackgroundColor3={Color3.fromHex("#1B1E24")}
					>
						<uicorner CornerRadius={new UDim(0, 3)} />
						<imagelabel
							Key={"Icon"}
							AnchorPoint={new Vector2(0.5, 0.5)}
							Size={new UDim2(0.833, 0, 0.833, 0)}
							Position={new UDim2(0.5, 0, 0.5, 0)}
							BackgroundTransparency={1}
							Image={"rbxassetid://127086072451757"}
						/>
					</textbutton>
					<textbutton
						Key={"Select"}
						AnchorPoint={new Vector2(0, 0.5)}
						Size={new UDim2(0.031, 0, 0.75, 0)}
						Position={new UDim2(0.964, 0, 0.5, 0)}
						Text={""}
						BackgroundColor3={Color3.fromHex("#1B1E24")}
					>
						<uicorner CornerRadius={new UDim(0, 3)} />
						<imagelabel
							Key={"Icon"}
							AnchorPoint={new Vector2(0.5, 0.5)}
							Size={new UDim2(0.833, 0, 0.833, 0)}
							Position={new UDim2(0.5, 0, 0.5, 0)}
							BackgroundTransparency={1}
							Image={"rbxassetid://114751447659442"}
						/>
					</textbutton>
				</frame>
				<frame
					Key={"HeaderPanel"}
					AnchorPoint={new Vector2(0.5, 0)}
					Size={new UDim2(0.959, 0, 0.069, 0)}
					Position={new UDim2(0.5, 0, 0.104, 0)}
					BackgroundColor3={Color3.fromHex("#14161B")}
				>
					<uistroke ApplyStrokeMode={"Contextual"} Thickness={1.5} Color={Color3.fromHex("#1B1E24")} />
					<uicorner CornerRadius={new UDim(0, 5)} />
					<textlabel
						Key={"MapName"}
						Size={new UDim2(0.106, 0, 0.5, 0)}
						Position={new UDim2(0.012, 0, 0.25, 0)}
						Text={"TAS Name"}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						TextColor3={Color3.fromHex("#EBEBEB")}
						BackgroundTransparency={1}
						TextSize={13}
						TextXAlignment={"Left"}
					/>
					<textlabel
						Key={"CreationDate"}
						Size={new UDim2(0.106, 0, 0.5, 0)}
						Position={new UDim2(0.365, 0, 0.25, 0)}
						Text={"Creation Date"}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						TextColor3={Color3.fromHex("#EBEBEB")}
						BackgroundTransparency={1}
						TextSize={13}
						TextXAlignment={"Left"}
					/>
					<textlabel
						Key={"ModifiedDate"}
						Size={new UDim2(0.1, 0, 0.5, 0)}
						Position={new UDim2(0.5, 0, 0.25, 0)}
						Text={"Last Modified"}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						TextColor3={Color3.fromHex("#EBEBEB")}
						BackgroundTransparency={1}
						TextSize={13}
						TextXAlignment={"Left"}
					/>
					<textlabel
						Key={"Completed"}
						Size={new UDim2(0.12, 0, 0.5, 0)}
						Position={new UDim2(0.667, 0, 0.25, 0)}
						Text={"Complete %"}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						TextColor3={Color3.fromHex("#EBEBEB")}
						BackgroundTransparency={1}
						TextSize={13}
						TextXAlignment={"Left"}
					/>
				</frame>
				<frame
					Key={"Panels"}
					AnchorPoint={new Vector2(0.5, 0)}
					Size={new UDim2(0.959, 0, 0.63, 0)}
					Position={new UDim2(0.5, 0, 0.19, 0)}
					BackgroundColor3={Color3.fromHex("#14161B")}
				>
					<uistroke ApplyStrokeMode={"Contextual"} Thickness={1.5} Color={Color3.fromHex("#1B1E24")} />
					<uicorner CornerRadius={new UDim(0, 5)} />
					<scrollingframe
						Key={"List"}
						Size={new UDim2(1, 0, 1, 0)}
						Position={new UDim2(0, 0, 0, 0)}
						BackgroundTransparency={1}
						ScrollBarThickness={0}
					>
						<frame
							Key={"HiderFrame"}
							BackgroundColor3={Color3.fromHex("#14161B")}
							BorderSizePixel={0}
							Size={new UDim2(1, 0, 0, 10)}
							Position={new UDim2(0, 0, 0, 32)}
							Visible={true}
							ZIndex={2}
						/>
					</scrollingframe>
				</frame>
			</frame>
		</frame>
	</screengui>
);
