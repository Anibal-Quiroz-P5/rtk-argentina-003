


import mongoose from "mongoose";

const connect = async () => {
  console.log("ENTRÉ LA FUNCION  CONNECTTT  !!!!");
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
}

export default connect; 