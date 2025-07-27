import readline from "readline-sync";
import { GetAllRiddles, addRiddle, CheckRiddelIfExist, DeleteRiddleApi, updateRiddelName, updateRiddelDescription, updateRiddelAnswer } from "../api/Riddles.Api.js";


export async function ShowAllRiddles() {
    const riddles = await GetAllRiddles();

    riddles.forEach((riddle, index) => {
        console.log(`Riddle ${index + 1}:`);
        for (const key in riddle) {
            console.log(`  ${key}: ${riddle[key]}`);
        }
    });
}

export async function AddNewRiddleToDB(newRiddle) {
    if (newRiddle.id === -1) {
        delete newRiddle.id;
    }
    return await addRiddle(newRiddle);
}

export async function DeleteRiddlesServices(){

    const id = readline.question("enter id of riddle you want to delete:");
    const exist = await CheckRiddelIfExist(id);

    if (!exist) {console.log("Riddel dont exist"); return;};
    
    await DeleteRiddleApi(id);
}

export async function UpdateExistingRiddle(){
    const IDriddel = readline.question('Enter Id: ');
    const exist = await CheckRiddelIfExist(IDriddel);

    // if riddel id dont exist
    if (!exist) {console.log("Riddel dont exist"); return;}

    const Choise = readline.question('Enter what do you wont to update\n1 name\n2 task Description\n3 correct Answer :');
    switch (Choise) {
        case "1":{
            const name = readline.question("Enter new name:")
            await updateRiddelName(IDriddel,name)
        }
        case "2":{
            const Description = readline.question("Enter new task Description:")
            await updateRiddelDescription(IDriddel,Description)
        }
        case "3":{
            const Answer = readline.question("Enter new correct Answer:")
            await updateRiddelAnswer(IDriddel,Answer)
        }
    }
}

export async function GetRiddles(){
    return await GetAllRiddles();
}