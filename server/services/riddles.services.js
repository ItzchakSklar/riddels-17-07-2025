import { getRiddlesDal,addRiddleDal,updateRiddleDal, deleteRiddleDal} from "../dal/riddles.dal.js"

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
        delete newRiddle.id;
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

export async function CheckriddleExist(id){
    const riddles = await getRiddles();
    let flag = await riddles.find(r => r.id == id);
    console.log("riidle find", flag);
    return flag;
}

export async function updateRiddleServises(id,updateRiddle){
    const exist = await CheckriddleExist(id);
    if (!exist){ return false; };
    const result = await updateRiddleDal(id,updateRiddle);
    console.log("stete update riddle",result);
    return result;
};

export async function deleteRiddleServices(id){

    const exist = await CheckriddleExist(id);
    if (!exist) return false;

    const result = await deleteRiddleDal(id);
    return result;
}