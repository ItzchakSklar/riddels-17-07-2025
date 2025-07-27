// import User from "../classes/Player";
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3005;


export async function ViewleaderBoardApi() {

    try {

        const res = await fetch(`http://localhost:${PORT}/player/leaderboard`);
        const data = await res.json();

        return data;

    } catch (err) {
        console.error("Error fetching leaderboard:", err);
        return [];
    }
}

export async function sendRecordToServer(name, reccord) {
    try {

        const res = await fetch(`http://localhost:${PORT}/player/submit-score`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "name": name, "reccord": reccord })
        });

        // console.log(data)
        if (!res || Object.keys(res).length === 0) {
            console.error("a problem to send record");
        }
        else {
            const data = await res.json();
            return data;
        }
    }

    catch (err) {
        console.error("Error sending reccord:", err);
        return [];
    }
}

export async function connectPlayerApi(name) {
    try {

        const res = await fetch(`http://localhost:${PORT}/player`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name:name})
        });

        // console.log(data)
        if (!res || Object.keys(res).length === 0) {
            console.error("a problem to connect");
            return false;
        }
        else {
            const data = await res.json();
            return data;
        }
    }
    catch (err) {
        console.error("Error connect player:", err);
        return [];
    }
}

export async function getUserApi(name) {
    try {

        const res = await fetch(`http://localhost:${PORT}/:${name}"`, {
        });

        // console.log(data)
        if (!res || Object.keys(data).length === 0) {
            console.error("a problem to get player");
            return false;
        }
        else {
            const data = await res.json();
            return data;
        }
    }
    catch (err) {
        console.error("Error get player:", err);
        return [];
    }
}

