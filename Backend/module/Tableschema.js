import mongoose from "mongoose";

const Tablemember = new mongoose.Schema({
    id:Number,
    gym_id:Number,
    name:String,
    email:String,
    phone:Number,
    plan_type:Number,
    member_type:String,
    status:String
});
const Tmamber = mongoose.model("Tmamber", Tablemember);

export default Tmamber;