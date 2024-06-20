import mongoose from "mongoose";

 const { Schema} = mongoose;

const userSchema = new Schema(
  { 
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    verificationToken: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
    { timestamps: true }
);

  /* export default mongoose.model("User", userSchema); */
  export default mongoose.models.User || mongoose.model("User", userSchema);

