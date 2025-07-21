import { config } from 'dotenv';
import { MongoClient, Db } from 'mongodb';
config();

const client = new MongoClient(process.env.DB_CONNECTION);

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */
export default async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("start_mongo");
        console.log("Connected to MongoDB");
    }
    return db;
}

export async function addRiddleDal(data){
    const db = await connect();
    const result = await db.collection("riddles").insertOne(data);
    return result.insertedId.toString();
}

export async function getRiddlesDal() {
    try {
        const db = await connect();
        const data = await db.collection("riddles").find().toArray();
        return data;
    } catch (err){
        console.log(err)
        return "{}";
    };
}

