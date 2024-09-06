import { ContentProvider, Players, ReplicatedFirst, Lighting, ReplicatedStorage } from "@rbxts/services";
import Roact from "@rbxts/roact";
import { LoadingGameWrapper } from "./Loading";

while (!game.IsLoaded()) {
	task.wait();
}

const startTime = os.clock();

const BackgroundBlur = new Instance("BlurEffect", Lighting);
BackgroundBlur.Size = 20;

const assets = game.GetDescendants();
const maxAssets = assets.size();

ReplicatedFirst.RemoveDefaultLoadingScreen();

const plr = Players.LocalPlayer;
const plrGui = plr.WaitForChild("PlayerGui");

Roact.mount(LoadingGameWrapper, Players.LocalPlayer.WaitForChild("PlayerGui"));
const ui = plr.WaitForChild("PlayerGui").WaitForChild("LoadingGameWrapper").WaitForChild("Background") as Frame;

for (const [i, assetToLoad] of pairs(assets)) {
	const percentage = math.floor((i / maxAssets) * 100);

	ContentProvider.PreloadAsync([assetToLoad]);
	(ui.WaitForChild("TotalAssets") as TextLabel).Text = `${i}/${maxAssets}`;
	(ui.WaitForChild("LoadingPercentage") as TextLabel).Text = `${percentage}%`;
	(ui.WaitForChild("LoadingAsset") as TextLabel).Text = `Loading: ${assetToLoad.Name}`;
	(ui.WaitForChild("LoadingBarWrapper").WaitForChild("LoadingBar") as Frame).TweenSize(
		new UDim2(percentage / 100, 0, 1, 0),
		"Out",
		"Quint",
		0.2,
		true,
	);
}

const completeTime = tonumber(string.format(`%.${1}f`, os.clock() - startTime)); // os.clock() - startTime
(ui.WaitForChild("LoadingAsset") as TextLabel).Text = `Loaded! (Took ${completeTime} seconds)`;

task.wait(0.5);
print(`Loading complete`);

ui.TweenPosition(new UDim2(0.5, 0, 1.5, 0), "In", "Quint", 0.4, false, () => {
	BackgroundBlur.Destroy();
});

(script.Parent?.WaitForChild("UpdWater") as BindableEvent).Fire();
