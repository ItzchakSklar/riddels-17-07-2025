import { Router } from "express";
import { ChackIfuserExist, getUser, submitScore, getLeaderboard } from "../controllers/player.controllers.js";

const router = Router();

// Chack If user Exist if not creat new
router.post ("", ChackIfuserExist)

router.post('/submit-score', submitScore);

router.get('/leaderboard', getLeaderboard);

router.get("/:username",getUser) 

// import { login, singup } from "../controllers/player.controllers.js";

// router.post('/login', login)

// router.post('/register', singup )

// router.post('/addReccord',(req,res)=>{
//     console.log("get",req.body);
//     res.status(200).json({ success: true });
// });


export default router;