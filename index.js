import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import EmployeeRoute from "./src/routes/EmployeeRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(EmployeeRoute);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running...');
});