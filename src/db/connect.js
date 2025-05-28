import mongoose from "mongoose";

function connectDB(DATABASE_ACESS) {
   return mongoose
      .connect(DATABASE_ACESS)
      .then(() => console.log("connected to database"))
      .catch((err) => console.log('something went wrong', err));
}

export default connectDB;
