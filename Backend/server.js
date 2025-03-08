import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/emailRouter.js";
import itemRouter from "./routes/itemRouter.js";
import cors from "cors";
import loginrouter from "./routes/loginRouter.js";
import passwordRouter from "./routes/passwordRouter.js";
import addressRouter from "./routes/addressRouter.js";
import { cartRouter } from "./routes/cartRouter.js";
dotenv.config();  

const app = express();
app.use(express.json());
const url = process.env.MONGO_URL;
if (!url) {
  console.error("MONGO_URL is missing in .env file!");
  process.exit(1);
}

console.log("MongoDB URL:", url); 
mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); 
  });

app.use(cors());
app.use(express.json());  
app.use(router);
app.use(express.static('public'));
app.use(itemRouter);
app.use(loginrouter);
app.use(passwordRouter);
app.use(addressRouter)
app.use(cartRouter);
const PORT=process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
}); 
