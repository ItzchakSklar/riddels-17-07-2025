// all Routes

// Show All Riddles             http://localhost:${PORT}/riddles/all                GET                                     !  
// add Riddle                   http://localhost:${PORT}/riddles/add                POST                                    !
// Check Riddle If Exist        http://localhost:${PORT}/riddles/ChackID/${id}      GET     return string "true" or "false" !
// update Riddle Name,          http://localhost:${PORT}/riddles/name${id}          PATCH   return string "true or "false"  !    
// update Riddle Description,   http://localhost:${PORT}/riddles/Description${id}   PATCH   return string "true or "false"  !
// update Riddle Answer         http://localhost:${PORT}/riddles/Answer${id}        PATCH   return string "true or "false"  !
// Delete Riddle                http://localhost:${PORT}/riddles/Delete${id}        DELETE                                  !


// needed functions

// getRiddles           !
// addRiddle            !      
// ChackID              !   return string "true" or "false"
// updateName           !   return string "true" or "false"
// updateDescription    !   return string "true" or "false"
// updateAnswer         !   return string "true" or "false"
// deleteRiddle         !    


import { Router } from "express";
import {getRiddlesController , addRiddle, ChackID, updateName, updateDescription, updateAnswer, deleteRiddle } from "../controllers/riddle.controllers.js"

const router = Router();

router.get("/all",getRiddlesController)

router.post("/add", addRiddle)

router.get("/ChackID/:id", (req, res) => {
    const result = ChackID(req.params.id);
    res.send(result);
});

router.patch("/name/:id", (req, res) => {
    updateName(req.params.id,req.body);
    const result = console.log("got name");
    res.send(result);
});

router.patch("/Description/:id", (req, res) => {
    const result = updateDescription(req.params.id,req.body);
    console.log("got Description");
    res.send(result);
});

router.patch("/Answer/:id", (req, res) => {
    const result = updateAnswer(req.params.id,req.body);
    console.log("got Answer");
    res.send(result);
});

router.delete("/Delete/:id", (req, res) => {
    deleteRiddle(req.params.id);
    res.send(result);
});

export default router;

// import { Router } from 'express';
// import { addUser,getUsers } from "../controllers/userController.js"

// const router = Router();

// router.get('/users', (req, res) => {
//     const users = getUsers();
//     res.json(users);
// });

// router.post('/users', (req, res) => {
//     const newUser = { id: Date.now(), name: req.body.name };
//     const result = addUser(newUser);
//     res.status(result.status).json({newuser:newUser,msg:result.msg});
// });

// export default router;