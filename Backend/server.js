import dotenv from 'dotenv';
dotenv.config();

dotenv.config({ path: './config.env' });
import app from './app.js';


import mongoose from "mongoose";


  const db = process.env.MONGO_STRING.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD,
    );
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('DB connection successful'));
    



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});