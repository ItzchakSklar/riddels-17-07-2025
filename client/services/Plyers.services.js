import { ViewleaderBoardApi, sendRecordToServer } from "../api/Useres.Api.js";

export async function ViewleaderBoard() {
    const leaderboard = await ViewleaderBoardApi();

    if (leaderboard.length === 0) {
        console.log("No leaderboard data available.");
        return;
    }

    console.log("Leaderboard:");
    leaderboard.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name} - ${player.lowestTime} seconds`);
    });
}

export async function updatePlayerRecord(player){
    await sendRecordToServer( player.name, player.reccord)
}

