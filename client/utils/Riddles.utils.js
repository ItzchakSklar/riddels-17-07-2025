import { creatRiddle } from "../services/Riddle.services.js";
import { addRiddle } from "../api/Riddles.Api.js";


export async function creatRiddleAndSend() {

    const newRiddle = creatRiddle();
    try {
        const newId = await addRiddle(newRiddle);
        console.log("the id from the new riddle is", newId);
    }
    catch (err) {
        console.log(err)
    }
}
