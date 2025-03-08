import dotenv from 'dotenv';
dotenv.config();

dotenv.config({ path: './config.env' });
import app from './app.js';


// MongoDB connection string
// const MONGO_URI = "mongodb+srv://user:OpJOqPZACOoI4okW@cluster0.pwzrm.mongodb.net/";

// mongoose
//     .connect(MONGO_URI) // Removed deprecated options
//     .then(() => {
//         console.log("Connected to MongoDB");
//         app.listen(5000, () => console.log("Server running on port 5000"));
//     })
//     .catch((err) => console.log(err));


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