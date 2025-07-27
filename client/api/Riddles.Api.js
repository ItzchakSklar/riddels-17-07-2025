import { Riddle } from "../classes/Riddle.js";
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3005;



export async function GetAllRiddles() {

    let arrRiddles = [];

    try {

        const res = await fetch(`http://localhost:${PORT}/riddles/all`);
        const data = await res.json();

        arrRiddles = data.map(r =>
            new Riddle(r._id, r.name, r.taskDescription, r.correctAnswer)
        );

        console.log("Loaded riddles:");
    } catch (err) {
        console.error("Error:", err);
    }
    return arrRiddles
};


export async function addRiddle(newRiddle) {
    const result = await fetch(`http://localhost:${PORT}/riddles/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRiddle)
    })
    if (!result.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await result.text();
    return data;
};

export async function CheckRiddelIfExist(IDRiddle) {
    const result = await fetch(`http://localhost:${PORT}/riddles/ChackID/${IDRiddle}`, {
        method: "GET"
    })
    if (result === "true") { return true; }
    if (result === "false") { return false; }
    console.log("a problem in the enswer")
    return -1;
}

export async function updateRiddelName(IDRiddle, newname) {
    const result = await fetch(`http://localhost:${PORT}/riddles/name`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "ID": IDRiddle, "Name": newname })
    })

    if (result === "true") { console.log("the Name update suscefuly"); return true; }
    if (result === "false") { console.log("a problem server to update Name"); return false; }

    console.log("a problem in the server enswer")
    return false;
}

export async function updateRiddelDescription(IDRiddle, newDescription) {
    const result = await fetch(`http://localhost:${PORT}/riddles/Description`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "ID": IDRiddle, "Description": newDescription })
    })

    if (result === "true") { console.log("the Description update suscefuly"); return true; }
    if (result === "false") { console.log("a problem server to update Description"); return false; }

    console.log("a problem in the server enswer")
    return false;
}

export async function updateRiddelAnswer(IDRiddle, newAnswer) {
    const result = await fetch(`http://localhost:${PORT}/riddles/Answer`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "ID": IDRiddle, "Answer": newAnswer })
    })

    if (result === "true") { console.log("the Answer update suscefuly"); return true; }
    if (result === "false") { console.log("a problem server to update Answer"); return false; }

    console.log("a problem in the server enswer")
    return false;
}

export async function DeleteRiddleApi(IDRiddle) {
    try {
        const response = await fetch(`http://localhost:${PORT}/riddles/Delete/${IDRiddle}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            console.log("Server responded with status:", response.status);
            return false;
        }

        const data = await response.text(); // או .json() אם אתה מחזיר JSON

        if (data === "true") {
            console.log("The riddle was deleted successfully");
            return true;
        } else {
            console.log("Server returned unexpected response:", data);
            return false;
        }
    } catch (error) {
        console.error("Error deleting riddle:", error.message);
        return false;
    }
}




// all functions

// ShowAllRiddles             !   http://localhost:${PORT}/riddles/all          GET
// addRiddle                  !   http://localhost:${PORT}/riddles/add          POST
// CheckRiddelIfExist         !   http://localhost:${PORT}/riddles/ChackID      GET     return string "true" or "false"
// updateRiddelName,          !   http://localhost:${PORT}/riddles/name         PATCH   return string "true or "false"
// updateRiddelDescription,   !   http://localhost:${PORT}/riddles/Description  PATCH   return string "true or "false"
// updateRiddelAnswer         !   http://localhost:${PORT}/riddles/Answer       PATCH   return string "true or "false"
// DeleteRiddleApi            !   http://localhost:${PORT}/riddles/Delete       DELETE


// export async function updateArrRiddles(){

//   let arrRiddles = [];

//   try {

//   const res = await fetch(`http://localhost:${PORT}/riddles`);
//   const data = await res.json();
//   // const data = await fs.readFile("./riddles/db.txt", "utf-8");

//   const parsed = JSON.parse(data);
//   arrRiddles = parsed.map(r =>
//   new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer)
//   );

//   console.log("Loaded riddles:");
// } catch (err) {
//   console.error("Error:", err);
// }
// return arrRiddles
// };