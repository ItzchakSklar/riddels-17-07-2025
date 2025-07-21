import readline from "readline-sync";

export class Riddle {
    constructor(id,name, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }

    // 
    ask() {
        console.clear();
        console.log(this.name);
        let goodEneser = false;
        while (!goodEneser) {
            console.log(this.taskDescription);
            const userEnser = readline.question("enter your enser:")
            if (userEnser == this.correctAnswer) {
                goodEneser = true
            }
        }
    }
}
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

// console.log(element.name);
//     while (!goodEneser){
//     console.log(element.taskDescription);
//     const userEnser = readline.question("enter your enser:")
//     if (userEnser == element.correctAnswer){
//         goodEneser = true
// }