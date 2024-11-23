// import mongoose from "mongoose";

// export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/reactjs-food-delivery-app').then(()=>{
//        console.log('DB connected') ;
//     })
// }

import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  const uri = process.env.MONGO_URI; // Load URI from .env

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("DB connection error:", error);
    process.exit(1); // Exit process if connection fails
  });
};
