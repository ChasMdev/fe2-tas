import Roact from "@rbxts/roact";

interface recentPanelProps {
	position: UDim2;
	size: UDim2;
}

const RecentPanel = (props: recentPanelProps) => {
	return (
		<frame
			Key={"RecentView"}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromHex("#101418")}
			Size={props.size}
			Position={props.position}
			LayoutOrder={2}
			//Visible={false} // TEMPORARY
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
	);
};

export default RecentPanel;
