import readline from "readline-sync";
import { Riddle } from "../classes/Riddle.js";
import { AddNewRiddleToDB } from "../services/Riddle.services.js";

// creat Riddle And Send to data base
export async function creatRiddleAndSend() {
    
    const newRiddle = creatRiddle();
    try {
        const newId = await AddNewRiddleToDB(newRiddle);
        console.log("the id from the new riddle is", newId);
    }
    catch (err) {
        console.log(err)
    }
}


// return a new riddle from the user
export function creatRiddle(){

    const name = readline.question("emter name of riddle: ");
    const riddle = readline.question("enter the riddle: ");
    const answer = readline.question("enter the correct answer: ");

    return new Riddle(-1,name,riddle,answer);
}
