import Roact from "@rbxts/roact";

export function calculateSize(ref: Roact.Ref<Frame>, scaleFactor: number) {
	const frame = ref.getValue();
	if (!frame) return new UDim2(0, 0, 0, 0);

	const absoluteSizeX = frame.AbsoluteSize.X;
	const absoluteSizeY = frame.AbsoluteSize.Y;
	const newSize = new UDim2(0, absoluteSizeX * scaleFactor, 1, 0);

	return newSize;
}
export function calculatePosition(ref: Roact.Ref<Frame>, scaleFactor: number) {
	const frame = ref.getValue();
	if (!frame) return new UDim2(0, 0, 0, 0);

	const absoluteSizeX = frame.AbsoluteSize.X;
	const absoluteSizeY = frame.AbsoluteSize.Y;
	const newPosition = new UDim2(1, 0 - (absoluteSizeX - absoluteSizeX * scaleFactor) / 2, 0.5, 0);

	return newPosition;
}

export function deleteFile(fileName: string) {
	print("scheduling deletion of file " + fileName);
}
export function duplicatieFile(fileName: string) {
	print("scheduling duplication of file " + fileName);
}
export function renameFile(oldFileName: string, newFileName: string) {
	print("scheduling renaming of file" + oldFileName + " to " + newFileName);
}
