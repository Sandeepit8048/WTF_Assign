import express from 'express'
import connectDB from '../Backend/mongoDB/mongoconnect.js'
import Userstatus from '../Backend/module/Schema.js'
import cors from 'cors';

connectDB();

const app = express();
app.use(express.json());
app.use(cors());


app.get('/status', async (req, res) => {
    try {
        const statuses = await Userstatus.find();
        res.json(statuses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 





app.listen(4000, ()=>{
    console.log("Server run 4000 port number")
})