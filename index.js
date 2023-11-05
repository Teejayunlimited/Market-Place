import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MANGO),then(() => {
  console.log('connected to MangoDB!');
}).catch((arr) =>{
  console.log(arr);
});



const app = express();

app.listen(3000, () => {
  console.log('server is running on port 3000!'); 
}

);