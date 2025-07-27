import { config } from 'dotenv';
import { MongoClient, Db } from 'mongodb';
// import { ObjectId } from "mongodb";
config();

const client = new MongoClient(process.env.DB_CONNECTION);

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */

export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("start_mongo");
        console.log("Connected to MongoDB");
    }
    return db;
};

export async function loginDal(username) {
    const db = connect();
    const user = await db.collection('players').findOne({ username });
    return user;
};

export async function ChachIfUserNameExistDal(username) {
    const db = await connect();
    const existing = await db.collection('players').findOne({ username });
    return existing;
};

export async function addNewUserDal(userName) {
    console.log(userName)
    const db = await connect();
    const result = await db.collection("players").insertOne({
        username: userName,
        createdAt: new Date()
    });
    return result.insertedId.toString();
};

export async function getUserDal(userName) {
    const db = await connect();

    const player = await db.collection("players").findOne({ username: userName });
    if (!player) return null;
    return player;

};

export async function updateScore(username, timeInSeconds) {
    const db = await connect();
    const result = await db.collection("players").updateOne(
        { username }, // לפי שם
        {
            $min: { bestScore: timeInSeconds } // יעדכן רק אם קטן יותר
        }
    );
    
    
    return result.modifiedCount > 0;
};

export async function getTop5FromCache() {
    const db = await connect();
    const doc = await db.collection("leaderboard_cache").findOne({ _id: "top5" });
    return doc?.players || [];
}

export async function updateLeaderboard(username, score) {
    console.log("added to leaderboard",username,score);

    const db = await connect();
    await db.collection("leaderboard").updateOne(
        { username },
        { $set: { username, score, updatedAt: new Date() } },
        { upsert: true }
    );
}


export async function getLeaderboard(){
    const db = await connect();
    return await db.collection("leaderboard")
        .find()
        .sort({ score: 1 }) // מהטוב לגרוע
        .limit(5)
        .toArray();
}
