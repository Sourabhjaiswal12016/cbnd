import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
/*
import express from "express";
const app = express();
// const connectDB = ()=>{

// }

// connectDB(); :: good way but we will use iffe:-
//writing code to connect mongoDB using iffe:-
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR after db connection: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();

*/

// another way of connecting mongoDB:-
// the way we have written code of db file is: asynchronous code way, which will return a Promise:-
const port = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("Got error after DB Connection call : ", error);
  });
