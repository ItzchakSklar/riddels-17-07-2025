import { creatRiddleAndSend } from "./Riddles.controllers.js";
import { ShowAllRiddles, UpdateExistingRiddle, DeleteRiddlesServices,GetRiddles } from "../services/Riddle.services.js";
import { ViewleaderBoard,
    updatePlayerRecord,
    // connectPlayerServices,
    connectPlayerController
} from "../services/Plyers.services.js"



// connect player
export async function connectPlayer(name){
    return await connectPlayerController(name)
}

// print Menu
export function printMenu(){
    console.log(`
What do you want to do?
1. Play the game
2. Create a new riddle
3. Read all riddles
4. Update an existing riddle
5. Delete a riddle
6. View leaderboard
7. Exit
    `);
}

// Chach Time return second
export function ChachTime(now) {
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hour = now.getHours();
    seconds += minutes * 60;
    seconds += hour * 60 * 60;
    return seconds
}

// run Game main function 
export async function runGame(player){

    const arrRiddles = await GetRiddles();


    arrRiddles.forEach(element => {
            let start = ChachTime(new Date());
            element.ask();
            let end = ChachTime(new Date());
            player.recordTime(start, end);
    })
    const Reccort = player.getReccord();
    console.log(Reccort);
    player.showStats();
    await updatePlayerRecord(player);
    console.log("update reccord");
}
// updatePlayerRecord


// switch Choice 1 - 7
// 1. Play the game         !
// 2. Create a new riddle   !
// 3. Read all riddles      !
// 4. Update an existing riddle !
// 5. Delete a riddle       !
// 6. View leaderboard      !
// 7. Exit                  !
export async function switchChoice(Choice,player){
    switch (Choice){
        case "1":{
            
            await runGame(player);
            return true;  
        }
        case "2":{
            await creatRiddleAndSend();
            return true;        
        }
        case "3":{
            await ShowAllRiddles();
            return true;        
        }
        case "4":{
            await UpdateExistingRiddle();
            return true;        
        }
        case "5":{
            await DeleteRiddlesServices();
            return true;        
        }
        case "6":{
            await ViewleaderBoard();
            return true;        
        }
        case "7":{
            return false;        
        }
    }
}

// export async function connect(name){
//     await connectPlayerServices({"name":name});
// }