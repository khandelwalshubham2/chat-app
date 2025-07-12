import { createClient, RedisClientType } from "redis";

let client: RedisClientType | null = null;

const getRedisClient = async (): Promise<RedisClientType> => {
  if (!client) {
    client = createClient();

    client.on("error", (err) => {
      console.error("Redis Client Error", err);
    });

    // client.connect().then(() => {
    //   console.log("connect ro redis");
    // });

    await client.connect();
  }

  return client;
};

export default getRedisClient;
