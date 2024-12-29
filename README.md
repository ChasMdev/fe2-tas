# FE2TAS - Game

**FE2TAS** is an open-source project inspired by the Roblox game [Flood Escape 2](https://www.roblox.com/games/586645082/Flood-Escape-2) and [8y8x's FE2CM Sandbox map](https://youtu.be/pTBZKNg4k8g). Developed using [Roblox-ts](https://roblox-ts.com/) and [Rojo](https://rojo.space/), this game focuses on **Tool-Assisted Speedrunning (TAS)**, reviving the popular TAS scripts from 2022. 

## Features

### Collision Features
- **Collision Color:** Visualizes different types of collisions:  
  - Gray: Baseparts  
  - Green: Meshes  
  - Cyan: Unions  
  - Darker Blue: Hull-collision unions  
  - Purple: Sloped parts  
  - Orange: Unanchored parts  
- **HRP-Based Character:** Displays your collision point at all times, unaffected by animations.  
- **Union Decomposition:** Reveals the internal hitboxes of unions, showing potential wallhop areas or collision zones. *(Note: Data can only be retrieved using exploits.)*

### Hitbox Features
- **Touching Parts:** Displays all parts your character is in contact with, helping you identify speed loss on walls.  
- **Walljump Raycast:** Shows the minimum distance required for a walljump, enabling optimization.  
- **Player Direction:** Useful for precise corner cutting in long hallways or straight-line navigation.  
- **Object Hitboxes:** Displays hitboxes for all interactable objects, such as buttons and air tanks.  
- **Extended Hitboxes:** Visualizes extended hitboxes, highlighting buttons reachable behind walls.  
- **Neck Position:** Ensures swimming functionality by verifying your neck is below the water level.  
- **Center Position:** Confirms survival by ensuring your character’s center is within the exit zone.  
- **Player State and Velocity:** Tracks velocity and player state, crucial for techniques like wall hugging or backjumping.

### Playback Features
- **TAS Playback:** Plays back the currently recorded TAS, enabling review and refinement.  
- **Playback Speed:** Adjusts playback speed to analyze potential improvements or accommodate low-end devices, with the option to speed up recordings in post-production.

### Saving Features
- **Cloud Saving:** Stores TAS runs externally, bypassing Roblox’s unreliable datastore for seamless sharing and reduced downtime.  
- **TAS Details:** Displays key information, including the map name, TAS creator, creation/update dates, and re-record count.  
- **Serializer Testing:** Validates serializer reliability by performing data read/write checks to prevent data loss.  
- **TAS Naming:** Allows custom naming of TAS files for easier sorting and tracking.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or suggestions, feel free to open an issue or reach out to [ChasM](https://discord.com/users/862122952970600478).
