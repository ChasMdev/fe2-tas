import Roact from "@rbxts/roact";

// <<- PANEL IMPORTS ->> \\
import RecentPanel from "./Recent/panel";
import Newpanel from "./new/panel";
import { newPanelControl } from "./panelControllers/controller.newPanel";
import { recentPanelControl } from "./panelControllers/controller.recentPanel";
import { loadPanelControl } from "./panelControllers/controller.loadPanel";
import { views, ViewPorts } from "./panelControllers/vars";

interface uiProps {
	recentPosition: UDim2;
	createPosition: UDim2;
	loadPosition: UDim2;
	recentSize: UDim2;
	createSize: UDim2;
	loadSize: UDim2;
}

class panel extends Roact.Component<object, uiProps> {
	private newPanelControl: newPanelControl;
	private recentPanelControl: recentPanelControl;
	private loadPanelControl: loadPanelControl;

	constructor(props: object) {
		super(props);
		this.state = {
			recentPosition: new UDim2(0.5, 0, 0.5, 0),
			createPosition: new UDim2(1.99, 0, 0.5, 0),
			loadPosition: new UDim2(-0.99, 0, 0.5, 0),
			recentSize: new UDim2(1, 0, 0.694, 0),
			createSize: new UDim2(0.46, 0, 0.555, 0),
			loadSize: new UDim2(),
		};
		this.newPanelControl = new newPanelControl(
			{ posX: this.state.createPosition.X.Scale, posY: this.state.createPosition.Y.Scale },
			{ sizeX: this.state.createSize.X.Scale, sizeY: this.state.createSize.X.Scale },
			(newSizeState) => this.setState({ createSize: newSizeState }),
			(newPosState) => this.setState({ createPosition: newPosState }),
		);
		this.recentPanelControl = new recentPanelControl(
			{ posX: this.state.recentPosition.X.Scale, posY: this.state.recentPosition.Y.Scale },
			{ sizeX: this.state.recentSize.X.Scale, sizeY: this.state.recentSize.Y.Scale },
			(newSizeState) => this.setState({ recentSize: newSizeState }),
			(newPosState) => this.setState({ recentPosition: newPosState }),
		);
		this.loadPanelControl = new loadPanelControl(
			{ posX: this.state.loadPosition.X.Scale, posY: this.state.loadPosition.Y.Scale },
			{ sizeX: this.state.loadSize.X.Scale, sizeY: this.state.loadSize.Y.Scale },
			(newSizeState) => this.setState({ loadSize: newSizeState }),
			(newPosState) => this.setState({ loadPosition: newPosState }),
		);
	}

	private openRecentPanel() {
		task.spawn(() => {
			if (views.CurrentView === ViewPorts.CREATE) {
				this.newPanelControl.moveNewPanel(
					{
						posX: 1.99,
						posY: 0.5,
					},
					{
						sizeX: 0.46,
						sizeY: 0.555,
					},
					{ frequency: 4, dampingRatio: 0.95 },
					false,
				);
			} else if (views.CurrentView === ViewPorts.LOAD) {
				this.loadPanelControl.moveLoadPanel(
					{
						posX: -1,
						posY: 0.5,
					},
					{
						sizeX: 0.8,
						sizeY: 0.555,
					},
					{ frequency: 4, dampingRatio: 0.95 },
					false,
				);
			}
		});
		this.recentPanelControl.moveRecentPanel(
			{
				posX: 0.5,
				posY: 0.5,
			},
			{
				sizeX: 1,
				sizeY: 0.694,
			},
			{ frequency: 4, dampingRatio: 0.95 },
			true,
		);
	}
	private openCreatePanel() {
		if (views.CurrentView === ViewPorts.RECENT) {
			this.recentPanelControl.moveRecentPanel(
				{
					posX: -1.2,
					posY: 0.5,
				},
				{
					sizeX: 0.8,
					sizeY: 0.555,
				},
				{ frequency: 4, dampingRatio: 0.95 },
				false,
			);
		} else if (views.CurrentView === ViewPorts.LOAD) {
			task.spawn(() => {
				this.loadPanelControl.moveLoadPanel(
					{
						posX: -1,
						posY: 0.5,
					},
					{
						sizeX: 0.8,
						sizeY: 0.555,
					},
					{ frequency: 4, dampingRatio: 0.95 },
					false,
				);
			});
			this.recentPanelControl.moveRecentPanel(
				{
					posX: -1.2,
					posY: 0.5,
				},
				{
					sizeX: 0.8,
					sizeY: 0.555,
				},
				{ frequency: 999999999999, dampingRatio: 1 },
				false,
			);
		}
		this.newPanelControl.moveNewPanel(
			{
				posX: 0.5,
				posY: 0.5,
			},
			{
				sizeX: 0.575,
				sizeY: 0.694,
			},
			{ frequency: 4, dampingRatio: 0.95 },
			true,
		);
	}
	private openLoadPanel() {
		if (views.CurrentView === ViewPorts.RECENT) {
			this.recentPanelControl.moveRecentPanel(
				{
					posX: 2.2,
					posY: 0.5,
				},
				{
					sizeX: 0.8,
					sizeY: 0.555,
				},
				{ frequency: 4, dampingRatio: 0.95 },
				false,
			);
		} else if (views.CurrentView === ViewPorts.CREATE) {
			task.spawn(() => {
				this.newPanelControl.moveNewPanel(
					{
						posX: 1.99,
						posY: 0.5,
					},
					{
						sizeX: 0.46,
						sizeY: 0.555,
					},
					{ frequency: 4, dampingRatio: 0.95 },
					false,
				);
			});
			this.recentPanelControl.moveRecentPanel(
				{
					posX: 2.2,
					posY: 0.5,
				},
				{
					sizeX: 0.8,
					sizeY: 0.555,
				},
				{ frequency: 999999999999, dampingRatio: 1 },
				false,
			);
		}
		this.loadPanelControl.moveLoadPanel(
			{
				posX: 0.5,
				posY: 0.5,
			},
			{
				sizeX: 1,
				sizeY: 0.694,
			},
			{ frequency: 4, dampingRatio: 0.95 },
			true,
		);
	}

	render() {
		return (
			<screengui Key={"RecentTabUi"} IgnoreGuiInset={true} ZIndexBehavior={"Sibling"}>
				<frame
					Key={"Wrapper"}
					BackgroundTransparency={1}
					Size={new UDim2(0.419, 0, 0.617, 0)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={new UDim2(0.5, 0, 0.5, 0)}
				>
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
							Event={{
								MouseButton1Click: () => {
									this.openCreatePanel();
								},
							}}
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
					<RecentPanel position={this.state.recentPosition} size={this.state.recentSize} />
					<Newpanel
						position={this.state.createPosition}
						size={this.state.createSize}
						onBackButtonClick={() => {
							this.openRecentPanel();
						}}
					/>
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
	}
}
export const recentTabGui = Roact.createElement(panel);
