import express from "express";
import cors from "cors";

// DB
import connectDB from "./mongoDB/mongoconnect.js";

// Models
import Check from "./module/Checkinsdata.js";
import member from "./module/Tableschema.js";
import Userstatus from "./module/Schema.js";

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

/* ---------------- CHECKINS API ---------------- */
app.get("/checkins", async (req, res) => {
  try {
    const checkins = await Check.find();
    res.json(checkins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ---------------- MEMBER API ---------------- */
app.get("/member", async (req, res) => {
  try {
    const members = await member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ---------------- STATUS API ---------------- */
app.get("/status", async (req, res) => {
  try {
    const statuses = await Userstatus.find();
    res.json(statuses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ---------------- SERVER ---------------- */
app.listen(4000, () => {
  console.log("Server running on port 4000");
});