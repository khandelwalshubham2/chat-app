import mongoose from "mongoose";
import envConfig from "./envConfig";

const databaseConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(`${envConfig.DATABASE_URL}`);
    console.log("service successfully connected to database");
  } catch (error) {
    console.log("error", "databaseConnection() method error:", error);
  }
};

export default databaseConnection;
