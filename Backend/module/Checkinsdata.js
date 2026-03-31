import mongoose from "mongoose";

const checkin = new mongoose.Schema({
    id:Number,
    member_id:Number,
    gym_id:Number,
     checked_in:Date,
     checked_out:"String",
});
const Checkin_member = mongoose.model("Checkin_member", checkin);

export default Checkin_member;