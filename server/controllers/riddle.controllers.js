import {
    getRiddles,
    addRiddleServices,
    isValidRiddle,
    CheckriddleExist,
    deleteRiddleServices,
    updateRiddleServises
 } from "../services/riddles.services.js";

export async function getRiddlesController(req, res){
    const riddles = await getRiddles();
    console.log("sending", riddles)
    res.json(riddles);
};

export async function addRiddle(req, res){
    console.log("got riddle",req.body);

    if (await !isValidRiddle(req.body)){return false;}
    
    const result = await addRiddleServices(req.body)
    console.log("sending",result);
    res.send(result)
    
};

export async function ChackID(req, res){
        const result = await CheckriddleExist(req.params.id)
        console.log("sending enser to find the riddle by id",result)
        res.send(result);
};

export async function deleteRiddle(req, res){
    console.log("delete reqest");
    const result = await deleteRiddleServices(req.params.id);
    console.log("sending deleted:", result);
    res.send(result);
};
  
export async function updateRiddle(req, res){
    const result = await updateRiddleServises(req.params.id,req.body);
    res.send(result);
};

// export function updateName(id,newName){

//     const arrRiddls = getRiddles();

//     if (arrRiddls.length == 0){return false;};

//     const riddle = arrRiddls.find(r => r.id == id);
//     if (!riddle) return false;

//     riddle.name = newName;

//     return writeBackRiddles(arrRiddls);

// }


// export function updateDescription(id,newDescription){

//     const arrRiddls = getRiddles();

//     if (arrRiddls.length == 0){return false;};

//     const riddle = arrRiddls.find(r => r.id == id);
//     if (!riddle) return false;

//     riddle.taskDescription = newDescription;

//     return writeBackRiddles(arrRiddls);

// }


// export function updateAnswer(id,newAnswer){

//     const arrRiddls = getRiddles();

//     if (arrRiddls.length == 0){return false;};

//     const riddle = arrRiddls.find(r => r.id == id);
//     if (!riddle) return false;

//     riddle.correctAnswer = newAnswer;

//     return writeBackRiddles(arrRiddls);

// }




//  updateDescription, updateAnswer,

// if (!successfully){return false;};

// import express from 'express';
// import { configRoutes } from "./routes/configRoutes.js"
// import logger from "./middlewares/logger.js"

// const PORT = process.env.PORT || 3005;

// const router = express.Router();
// const app = express();

// app.use(express.json());

// app.use(logger);

// configRoutes(app);

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });


// const server = http.createServer((req,res) =>{
//     if (req.method === "GET" && req.url === "/riddles") {
//         const riddles = getAllRiddles();

//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify(riddles));
//         res.end();
//     }
//     if (req.method === "POST" && req.url === "/riddles/add"){
//         const riddles = addRiddle();
//     }
// })