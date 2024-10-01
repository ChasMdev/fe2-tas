import Roact from "@rbxts/roact";
import { TweenService } from "@rbxts/services";

interface Props {
	position: UDim2;
	size: UDim2;
	onBackButtonClick: () => void;
}
interface State {
	backButtonTransparency: number;
}

class Newpanel extends Roact.Component<Props, State> {
	private buttonRef: Roact.Ref<TextButton>;

	constructor(props: Props) {
		super(props);
		this.buttonRef = Roact.createRef<TextButton>();

		this.state = {
			backButtonTransparency: 1,
		};
	}
	private onBackButtonHover = (hover: number) => {
		const button = this.buttonRef.getValue();
		if (button) {
			TweenService.Create(button, new TweenInfo(0.17), { BackgroundTransparency: hover }).Play();
		}
	};
	private onBackButtonClick = () => {
		const button = this.buttonRef.getValue();
		if (button) {
			const store = button.BackgroundTransparency;
			button.BackgroundTransparency = 0.7;
			task.wait(0.05);
			TweenService.Create(button, new TweenInfo(0.3), { BackgroundTransparency: store }).Play();
		}
	};

	render() {
		return (
			<frame
				Key={"NewView"}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromHex("#101418")}
				Size={this.props.size}
				Position={this.props.position}
				LayoutOrder={2}
			>
				<uicorner CornerRadius={new UDim(0, 18)} />
				<textbutton
					Key={"Back"}
					Ref={this.buttonRef}
					BackgroundTransparency={1}
					BackgroundColor3={Color3.fromHex("#c1c6ca")}
					Position={new UDim2(0.039, 0, 0.048, 0)}
					Size={new UDim2(0.216, 0, 0.065, 0)}
					Text={""}
					AutoButtonColor={false}
					Event={{
						MouseButton1Click: () => {
							this.onBackButtonClick();
							this.props.onBackButtonClick();
						},
						MouseEnter: () => {
							this.onBackButtonHover(0.87);
						},
						MouseLeave: () => {
							this.onBackButtonHover(1);
						},
					}}
				>
					<uicorner CornerRadius={new UDim(0, 4)} />
					<imagelabel
						BackgroundTransparency={1}
						Size={new UDim2(0.3, 0, 1, 0)}
						Image={"rbxassetid://123237646963503"}
						ImageColor3={Color3.fromHex("#c1c6ca")}
					/>
					<textlabel
						AnchorPoint={new Vector2(0, 0.5)}
						BackgroundTransparency={1}
						Size={new UDim2(0.39, 0, 0.6, 0)}
						Position={new UDim2(0.3, 0, 0.5, 0)}
						FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
						Text={"Back"}
						TextColor3={Color3.fromHex("#c1c6ca")}
						TextScaled={true}
					/>
				</textbutton>
				<textbox
					Key={"Search"}
					BackgroundColor3={Color3.fromHex("#080C10")}
					Position={new UDim2(0.312, 0, 0.048, 0)}
					Size={new UDim2(0.517, 0, 0.065, 0)}
					FontFace={new Font("rbxassetid://12187365364", Enum.FontWeight.SemiBold)}
					PlaceholderColor3={Color3.fromHex("#3D3F43")}
					PlaceholderText={"Search"}
					TextColor3={Color3.fromHex("#c1c6ca")}
					Text={""}
					TextSize={16}
				>
					<uicorner CornerRadius={new UDim(0, 4)} />
				</textbox>
			</frame>
		);
	}
}
export default Newpanel;
