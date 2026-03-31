import express from 'express'
import connectDB from '../Backend/mongoDB/mongoconnect.js'
import Usermember from '../Backend/module/Tableschema.js'
import cors from 'cors';

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const addStatus = async () => {
    await Usermember.create({
        id: 1,
        gym_id: 1,
        name: "WTF Gyms — Lajpat Nagar",
        email: "lajpatnagar@wtfgyms.com",
        phone: 9876543210,
        plan_type: 1,
        member_type: "Premium",
        status: "Active"
    },
        {
            id: 2,
            gym_id: 1,
            name: "WTF Gyms — Connaught Place",
            email: "connaughtplace@wtfgyms.com",
            phone: 9876543211,
            plan_type: 2,
            member_type: "Standard",
            status: "Active"
        },
        {
            id: 3,
            gym_id: 1,
            name: "WTF Gyms — Bandra West",
            email: "bandrawest@wtfgyms.com",
            phone: 9876543212,
            plan_type: 3,
            member_type: "Basic",
            status: "Active"
        },
        {
            id: 4,
            gym_id: 1,
            name: "WTF Gyms — Powai",
            email: "powai@wtfgyms.com",
            phone: 9876543213,
            plan_type: 4,
            member_type: "Premium",
            status: "Active"
        },
        {
            id: 5,
            gym_id: 1,
            name: "WTF Gyms — Bandra West",
            email: "bandrawest@wtfgyms.com",
            phone: 9876543212,
            plan_type: 3,
            member_type: "Basic",
            status: "Active"
        },
        {
            id: 6,
            gym_id: 1,
            name: "WTF Gyms — Koramangala",
            email: "koramangala@wtfgyms.com",
            phone: 9876543214,
            plan_type: 4,
            member_type: "Premium",
            status: "Active"
        },);


}
addStatus();

app.listen(3000, ()=>{
    console.log("Server run 3000 port number")
})

