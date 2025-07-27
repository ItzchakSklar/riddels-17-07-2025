import { 
    ChackIfuserExistServices,
    getUserServices,
    submitScoreServices,
    getLeaderboarServices
    } from "../services/player.services.js"


export async function ChackIfuserExist(req,res){
    try{
    const result = await ChackIfuserExistServices(req.body.name);
    console.log("sendin chack user: ",result);
    res.send(result);
    }
    catch(error){
     res.status(500).send(false);   
    }

}

export async function getUser(req,res){
    const username = req.params.username;
    const user = await getUserServices(username);
    console.log("sending data user: ",user);
    res.json(user)
}

export async function submitScore(req, res) {
    console.log("post ",req.body)
    const { name, reccord } = req.body;
    if (!name || !reccord) {
        console.log("a missing reqest",req.body)
        return res.status(400).json({ error: "Missing data" });
    }
    const result = await submitScoreServices(name, reccord);
    console.log("sending",req.body)
    res.json({ success: true, scoreId: result });
}


export async function getLeaderboard(req, res) {
    console.log("get Leader board")
    try{
        const leaderboard = await getLeaderboarServices();
        console.log("sending:",leaderboard);
        res.json(leaderboard);
    }
    catch(error){
        console.log(error);
        res.status(500).send(false);
    }
}


// import bcrypt from 'bcrypt';
// import { loginDal , addNewUser } from "../dal/player.dal.js"
// import { ChachIfUserNameExist, } from "../services/player.services.js"

// export async function login(req, res){
//     const { username, password } = req.body;

//     try {
//         user = loginDal(username);

//         if (!user) {
//             return res.status(401).json({ error: 'שם משתמש או סיסמה שגויים' });
//         }

//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (!passwordMatch) {
//             return res.status(401).json({ error: 'שם משתמש או סיסמה שגויים' });
//         }

//         if (user.role !== 'admin') {
//             return res.status(403).json({ error: 'אין הרשאה למשתמש זה' });
//         }

//         return res.json({ message: 'התחברות הצליחה', role: user.role });
//     } catch (error) {
//         return res.status(500).json({ error: 'שגיאה בשרת' });
//     }
// };
    
// export async function singup(req, res){
//     const { username, password, role } = req.body;

//     if (!username || !password || !role) {
//         return res.status(400).json({ error: 'חסר שם משתמש, סיסמה או תפקיד' });
//     }

//     try {    
//         if (await ChachIfUserNameExist(username)) {
//             return res.status(409).json({ error: 'שם המשתמש כבר קיים' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         const result = await addNewUser({
//             username : username ,
//             password: hashedPassword,
//             role : role
//         });
//         console.log("user",username ,"added to db")
//         res.status(201).json({ message: 'משתמש נוסף בהצלחה' });
//     } catch (err) {
//         res.status(500).json({ error: 'שגיאה ביצירת משתמש' });
//     }
// };
