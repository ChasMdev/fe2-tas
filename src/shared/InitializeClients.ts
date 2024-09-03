function anchorPlayer(player: Player, bool: boolean) {
    if  (player) {
        if (player.Character?.FindFirstChild("HumanoidRootPart")) {
            (player.Character.FindFirstChild("HumanoidRootPart") as Part).Anchored = bool
        }
    }
}

function teleportPlayer(player: Player,Position: Vector3) {
    if (player) {
        if (player.Character?.FindFirstChild("HumanoidRootPart")) {
            (player.Character.FindFirstChild("HumanoidRootPart") as Part).CFrame = new CFrame(Position)
        }
    }
}

function main(player: Player) {
    if (player) {
        while (!player.Character?.FindFirstChild("HumanoidRootPart")) {task.wait()} // wait until character loads

        const character = player.Character
        const humanoid = character?.WaitForChild("Humanoid")
        const humanoidRootPart = character?.WaitForChild("HumanoidRootPart")

        teleportPlayer(player, new Vector3(0,10000,0))
        anchorPlayer(player, true)
    }
}

export {
    main
}