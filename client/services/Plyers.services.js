import {
    ViewleaderBoardApi,
    sendRecordToServer,
    connectPlayerApi,
    getUserApi
} from "../api/Useres.Api.js";
import { Player } from "../classes/Player.js"

export async function ViewleaderBoard() {
    const leaderboard = await ViewleaderBoardApi();
    
     if (!Array.isArray(leaderboard)) {
        console.error("Invalid leaderboard data:", leaderboard);
        return;
    }


    if (leaderboard.length === 0) {
        console.log("No leaderboard data available.");
        return;
    }

    console.log("Leaderboard:");
    leaderboard.forEach((player, index) => {
        const name = player.playerName || player.username || "Unknown";
        const score = player.score ?? "N/A";
        console.log(`${index + 1}. ${name} - ${score} seconds`);
    });
}

export async function updatePlayerRecord(player) {
    await sendRecordToServer(player.name, player.reccord)
}


export async function connectPlayerController(name) {
    const result = await connectPlayerApi(name);
    if (!result) { "a problem connect: ", name };
    return new Player(name);
}