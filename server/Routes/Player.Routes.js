import { Router } from "express";

const router = Router();

router.post('/add',(req,res)=>{
    console.log(req.body);
    res.end();
});

export default router;