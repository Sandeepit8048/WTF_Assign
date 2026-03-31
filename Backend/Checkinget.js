// import express from 'express'
// import connectDB from '../Backend/mongoDB/mongoconnect.js'
// import Check from './module/Checkinsdata.js'
// import Schema from './module/Schema.js'
// import member from './module/Tableschema.js'
// import cors from 'cors';

// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors());


// app.get('/Check', async (req, res) => {
//     try {
//         const checkins = await Check.find();
//         res.json(checkins);
//     },

     
    
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }); 





// app.listen(9000, ()=>{
//     console.log("Server run 9000 port number")
// })