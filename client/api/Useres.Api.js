// import User from "../classes/Player";
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3005;


export async function ViewleaderBoardApi() {

    try {

        const res = await fetch(`http://localhost:${PORT}/leader`);
        const data = await res.json();

        return data;

    } catch (err) {
        console.error("Error fetching leaderboard:", err);
        return [];
    }
}

export async function reccord( name, reccord ) {
    try {

        const res = await fetch(`http://localhost:${PORT}/player/add`,{
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name:name,reccord:reccord})
    });
        const data = await res.json();

        return data;

    } catch (err) {
        console.error("Error fetching leaderboard:", err);
        return [];
    }
}

