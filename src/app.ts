import express from "express";
import databaseConnection from "./configurations/db";
import envConfig from "./configurations/envConfig";
import setAppRoutes from "./routes";

const app = express();

databaseConnection();

// getRedisClient();

setAppRoutes(app);

app.listen(envConfig.PORT, () => {
  console.log(`server is running on ${envConfig.PORT}`);
});
