import { creatRiddleAndSend } from "./Riddles.utils.js";
import { ShowAllRiddles, UpdateExistingRiddle, DeleteRiddlesServices,GetRiddles } from "../services/Riddle.services.js";
import { ViewleaderBoard,updatePlayerRecord } from "../services/Plyers.services.js"



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

export function ChachTime(now) {
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hour = now.getHours();
    seconds += minutes * 60;
    seconds += hour * 60 * 60;
    return seconds
}

export async function runGame(player){

    const arrRiddles = await GetRiddles();


    arrRiddles.forEach(element => {
            let start = ChachTime(new Date());
            element.ask();
            let end = ChachTime(new Date());
            player.recordTime(start, end);
            updatePlayerRecord(player)
    })
    console.log(player.reccord());
    player.showStats();
}


// What do you want to do?
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

