import readline from "readline-sync";
import { Player } from "./classes/Player.js";
import { printMenu, switchChoice} from "./utils/App.utils.js"
// import { User } from "./api/UseresApi.js"


console.log("Welcome to the Riddle Game!");
const name = readline.question("What is your name?: ");
// User(name);

const player = new Player(name);

let run = true;

while(run){

    printMenu()
    let Choice = readline.question('Enter choice: ');
    run = await switchChoice(Choice,player);
    
}




// Breakdown
// 1. Ask for Player Name
// ● Use readline-sync for synchronous terminal input (see appendix A at the end)
// 2. Load All Riddles
// ● Import all riddles into your main js file. try to import one line, and not import each
// riddle individually:
// // app.js
// import AllRiddles from ‘path/to/file/ - V
// import riddle1 from ‘/path/to/file’
// import riddle2 from ‘/path/to/file’ - X
// …

// 3. Object-Oriented Classes
// Class: Riddle
// Represents a single riddle.
// Properties:
// ● id
// ● name
// ● taskDescription
// ● correctAnswer

// Methods:
// ● ask()
// ○ Displays the riddle
// ○ Uses the provided readlind.question function to get user input
// ○ compare the given input to the correct answer
// ○ Repeats until the correct answer is given

// Class: Player
// Tracks player info and timings.
// Properties:
// ● name
// ● times[] — array of durations per riddle

// Methods:
// ● recordTime(start, end)
// ● showStats() — display total and average time

// 4. Game Flow (app.js)
// Steps:

// ● Welcome the player
// ● Ask for player name
// ● Load all riddles
// ● For each riddle:
// ○ Record start time (Date.now()) - hint - use a decorator!
// ○ Call riddle.ask()
// ○ Record end time
// ○ Save time difference
// ● After all riddles are solved:
// ○ Show total time
// ○ Show average time

// Example Output
// ● Welcome to the Riddle Game!
// ● What is your name? Sarah
// ●
// ● Riddle 1: Easy Math
// ● What is 5 + 3? → 8
// ● Correct!
// ●
// ● Riddle 2: Mystery
// ● I speak without a mouth. What am I? → echo
// ● Correct!
// ●
// ● Great job, Sarah!
// ● Total time: 72 seconds
// ● Average per riddle: 36 seconds