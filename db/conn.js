// For special characters such as @ you need to encode it
// This means replacing @ with %40 or using the encoding function

import "dotenv/config";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

// const connectionString = process.env.ATLAS_URI || "";
// console.log(connectionString);

// const client = new MongoClient(connectionString);

// let conn;
// try {
//   conn = await client.connect();
//   console.log("Connected to Mongo");
// } catch (err) {
//   console.log(err);
// }

const db = await mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err)); // await conn.db("sample_training");

export default db;
