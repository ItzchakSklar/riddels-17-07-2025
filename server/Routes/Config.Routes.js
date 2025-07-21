import RiddlesRouter from "./Riddle.Routes.js";
import PlayerRouter from "./Player.Routes.js"

export default function configRoutes(app) {

  app.use('/riddles', RiddlesRouter);
  app.use('/player', PlayerRouter)  
  
}

