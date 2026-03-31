import express from 'express'
import connectDB from '../Backend/mongoDB/mongoconnect.js'
import checkins from '../Backend/module/Checkinsdata.js'
import cors from 'cors';

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const checkindatas = async () => {
    await checkins.create({
        id: 1,
        member_id: 1,
        gym_id: 1,
        checked_in: new Date(),
        checked_out: "null"
    },
 
        {
            id: 2,
            gym_id: 1,
            member_id: 2,
            gym_id: 1,
            checked_in: new Date(),
            checked_out: "null"
            
        },
        {
            id: 3,
            member_id: 3,
            gym_id: 1,
            checked_in: new Date(),
            checked_out: "null"
        },

        {
            id: 4,
            member_id: 4,
            gym_id: 1,
            checked_in: new Date(),
            checked_out: "null"
       
        },
        {
            id: 5,
            member_id: 5,
            gym_id: 1,
            checked_in: new Date(),
            checked_out: "Null"
        },
   
        {
            id: 6,
            member_id: 6,
            gym_id: 1,
            checked_in: new Date(),
            checked_out: "Null"
       
        },);


}
checkindatas();

app.listen(7000, ()=>{
    console.log("Server run 7000 port number")
})

