import {
    ChachIfUserNameExistDal,
    addNewUserDal,
    getUserDal,
    getLeaderboard,
    updateLeaderboard,
    updateScore,
    connect
} from "../dal/player.dal.js"


export async function ChackIfuserExistServices(userName) {
    const result = await ChachIfUserNameExistDal(userName);
    if (result) {
        return true;
    }
    result = await addNewUserDal(userName);
    console.log(userName, " added");
    return false;
}

export async function getUserServices(name) {
    try {
        const user = await getUserDal(name);
        if (!user.bestScore) {
            return {
                username: user.username,
                createdAt: user.createdAt
            };
        }
        else {
            return {
                username: user.username,
                createdAt: user.createdAt,
                bestScore: user.bestScore
            }
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

export async function submitScoreServices(username, score) {
    const player = await getUserDal(username);
    if (!player) {
        throw new Error("Player not found");
    }

    console.log("player found");
    const scoreId = await updateScore(username, score);

    const top5 = await getLeaderboard();
    let updated = false;

    const index = top5.findIndex(p => p.username === username);

    if (index !== -1) {
        if (score < top5[index].score) {
            await updateLeaderboard(username, score);
            updated = true;
        }
    } else if (top5.length < 5) {
        await updateLeaderboard(username, score);
        updated = true;
    } else {
        const worst = top5.reduce((max, p) => p.score > max.score ? p : max, top5[0]);
        if (score < worst.score) {
            // מחיקה של הגרוע
            const db = await connect();
            await db.collection("leaderboard").deleteOne({ username: worst.username });

            // הכנסת החדש
            await updateLeaderboard(username, score);
            updated = true;
        }
    }
    return scoreId;
}

export async function getLeaderboarServices() {
    return await getLeaderboard();
}

export async function refreshLeaderboardIfNeeded(updatedPlayerName, updatedScore) {
    const currentTop5 = await getTop5FromPlayers();

    const isInTop5 = currentTop5.some(player => player.playerName === updatedPlayerName);

    if (isInTop5) {
        await updateLeaderboardCache(currentTop5);
    }
}

// export function singupServices() {

// }