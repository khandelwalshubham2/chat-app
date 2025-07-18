import mongoose, { Document, Schema } from "mongoose";

export interface IUSER extends Document {
  name: string;
  email: string;
}

const schema: Schema<IUSER> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUSER>("User", schema);

export default User;
