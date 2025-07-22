import express from 'express';
import  configRoutes  from './Routes/Config.Routes.js';

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());

configRoutes(app);

app.listen(PORT, () => {
    console.log(`Server runing on port:${PORT}`);
})

