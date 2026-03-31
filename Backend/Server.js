import express from 'express';
import connectDB from './mongoDB/mongoconnect.js';
import cors from 'cors';
import Userstatus from './module/Schema.js';

connectDB();

const app = express();
app.use(express.json());
app.use(cors());


const addStatus = async () => {
    await Userstatus.create({
        id: 1,
        name: "WTF Gyms — Lajpat Nagar",
        city: "New Delhi",
        capacity: 220,
        opens: "05:30",
        closes: "22:30",
        status: "Active"
    },
        {
            id: 2,
            name: "WTF Gyms — Connaught Place",
            city: "New Delhi",
            capacity: 180,
            opens: "06:00",
            closes: "22:00",
            status: "Active"
        },
        {
            id: 3,
            name: "WTF Gyms — Bandra West",
            city: "Mumbai",
            capacity: 300,
            opens: "05:00",
            closes: "23:00",
            status: "Active"
        },
        {
            id: 4,
            name: "WTF Gyms — Powai",
            city: "Mumbai",
            capacity: 250,
            opens: "05:30",
            closes: "23:30",
            status: "Active"
        },
        {
            id: 5,
            name: "WTF Gyms — Bandra West",
            city: "Bengaluru",
            capacity: 200,
            opens: "05:30",
            closes: "22:00",
            status: "Active"
        },
        {
            id: 6,
            name: "WTF Gyms — Koramangala",
            city: "Bengaluru",
            capacity: 180,
            opens: "06:00",
            closes: "22:00",
            status: "Active"
        },);

}
addStatus();





app.listen(2000, () => {
    console.log("Server is running on port 2000");
})