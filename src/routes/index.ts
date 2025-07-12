import { Express } from "express";
import userRoutes from "./user";
const setAppRoutes = (app: Express) => {
  app.use("/api/v1", userRoutes);
};

export default setAppRoutes;
