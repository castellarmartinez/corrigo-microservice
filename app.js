import express from "express";
import workorder from "./routes/workorders.js"
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();

app.use("/workorder", workorder);

app.listen(PORT, () => {
   console.log("App up and running on port " + PORT);
})