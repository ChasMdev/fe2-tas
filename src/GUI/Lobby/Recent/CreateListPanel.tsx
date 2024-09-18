import Roact from "@rbxts/roact";
import { RunService, TweenService } from "@rbxts/services";
import { calculatePosition, calculateSize, deleteFile, duplicatieFile, renameFile } from "./manager";
import { flipperController } from "./controllers/controller";

export function createListPanel(index: number, fileName: string, modifiedDate: string, fileID: string) {
	let panelColor = "#1E1F24";

	if (index % 2 === 0) {
		panelColor = "#101418";
	}
	let optionsOpen: boolean = false;

	interface uiProps {
		IDHider: boolean;
		optnsWrapper: UDim2;
		listSize: UDim2;
		listPosition: UDim2;
	}

	class panel extends Roact.Component<object, uiProps> {
		private optnsWrapperRef: Roact.Ref<Frame>;
		private renderSteppedConnection: RBXScriptConnection | undefined;
		private flipperController: flipperController;

		constructor(props: object) {
			super(props);
			this.state = {
				IDHider: true,
				optnsWrapper: new UDim2(0.408, 0, 0.769, 0),
				listSize: new UDim2(0, 300, 1, 0),
				listPosition: new UDim2(0, 304, 0.5, 0),
			};
			this.optnsWrapperRef = Roact.createRef();
			this.flipperController = new flipperController(
				0, // Initial value for the motor
				(newUDim2) => this.setState({ optnsWrapper: newUDim2 }),
			);
		}
		handleExtrasClick = () => {
			optionsOpen = !optionsOpen;
			if (optionsOpen) {
				this.flipperController.openOptions();
			} else {
				this.flipperController.closeOptions();
			}
		};

		didMount() {
			this.renderSteppedConnection = RunService.RenderStepped.Connect(() => {
				this.updateListSizeAndPosition();
			});
		}
		updateListSizeAndPosition() {
			const frame = this.optnsWrapperRef.getValue();
			if (frame) {
				const absoluteSizeX = frame.AbsoluteSize.X;

				// Only proceed if the size is correct, e.g., not the default or undesired value
				if (absoluteSizeX > 0) {
					this.setState({
						listSize: calculateSize(this.optnsWrapperRef, 0.974),
						listPosition: calculatePosition(this.optnsWrapperRef, 0.974),
					});

					// Disconnect the RenderStepped connection to stop further updates
					if (this.renderSteppedConnection) {
						this.renderSteppedConnection.Disconnect();
						this.renderSteppedConnection = undefined;
						this.setState({
							optnsWrapper: new UDim2(0, 0, 0.769, 0),
						});
					}
				}
			}
		}

		render() {
			return (
				<frame
					Key={"Panel"}
					Size={new UDim2(1, 0, 0.123, 0)}
					Position={new UDim2(0, 0, 0.123 * (index - 1), 0)}
					BackgroundColor3={Color3.fromHex(panelColor)}
					LayoutOrder={index}
				>
					<uicorner CornerRadius={new UDim(0, 6)} />
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
					<textlabel
						Key={"fileID"}
						BackgroundTransparency={1}
						AnchorPoint={new Vector2(0, 0.5)}
						Size={new UDim2(0.156, 0, 0.333, 0)}
						Position={new UDim2(0.765, 0, 0.5, 0)}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						Text={`T-${fileID}`}
						TextScaled={true}
						TextColor3={Color3.fromHex("#C1C6CA")}
					/>
					<textbutton
						Key={"fileIDHider"}
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundColor3={Color3.fromHex("#25272C")}
						Position={new UDim2(0.756, 0, 0.5, 0)}
						Size={new UDim2(0.174, 0, 0.79, 0)}
						Text={""}
						ZIndex={2}
						Visible={this.state.IDHider}
						Event={{
							MouseButton1Click: () => {
								this.setState({ IDHider: false });
							},
						}}
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
							ZIndex={2}
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
					<frame
						Ref={this.optnsWrapperRef}
						Key={"OptionsWrapper"}
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundColor3={Color3.fromHex("#25272C")}
						Position={new UDim2(0.064, 0, 0.5, 0)}
						Size={this.state.optnsWrapper}
						ClipsDescendants={true}
						ZIndex={2}
					>
						<uicorner CornerRadius={new UDim(0, 4)} />
						<frame
							Key={"List"}
							BackgroundTransparency={1}
							AnchorPoint={new Vector2(1, 0.5)}
							Size={this.state.listSize}
							Position={this.state.listPosition}
							ZIndex={2}
						></frame>
					</frame>
					<imagebutton
						Key={"Extras"}
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Size={new UDim2(0.04, 0, 0.624, 0)}
						Position={new UDim2(0.012, 0, 0.5, 0)}
						Image={"rbxassetid://77800512493780"}
						ImageColor3={Color3.fromHex("#C1C6CA")}
						Event={{
							MouseButton1Click: this.handleExtrasClick,
						}}
					/>
				</frame>
			);
		}
	}
	return Roact.createElement(panel);
}
