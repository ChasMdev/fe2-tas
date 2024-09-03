import { Players } from "@rbxts/services";

import { main } from "shared/InitializeClients";

Players.PlayerAdded.Connect((player) => {
    main(player)
})