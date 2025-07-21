import { getRiddlesDal,addRiddleDal } from "../dal/riddles.dal.js"

export async function getRiddles(){
    const data = await getRiddlesDal();
     if (typeof data === 'string') {
        try {
            return await JSON.parse(data);
        } catch (err) {
            console.error("Failed to parse JSON string:", err);
            return null; // או לזרוק שגיאה אם זה קריטי
        }
    }
    return data;
}


export async function addRiddleServices(newRiddle) {
    if (newRiddle.id === -1) {
        delete obj.id;
    }
    const redult = await addRiddleDal(newRiddle);
    console.log("added",redult,"to db");    
    return redult;
} 

export function isValidRiddle(riddle) {
    return (
        riddle.hasOwnProperty('name') &&
        riddle.hasOwnProperty('taskDescription') &&
        riddle.hasOwnProperty('correctAnswer')
    );
}

