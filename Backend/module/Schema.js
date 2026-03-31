import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:Number,
    name:String,
    city:String,
    capacity:Number,
    opens:String,
    closes:String,
    status:String
});
const Userstatus = mongoose.model("Userstatus", userSchema);

export default Userstatus;