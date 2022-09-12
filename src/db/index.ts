import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb://localhost/FlightsProject");
};

export { connectDb }

