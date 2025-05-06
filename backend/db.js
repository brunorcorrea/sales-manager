import { Client } from "pg";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const sslCert = fs.readFileSync("./prod-ca-2021.crt").toString();

const connectionString = process.env.DATABASE_URL;
const client = new Client(connectionString, {
  prepare: false,
  ssl: {
    ca: sslCert,
    rejectUnauthorized: true,
  },
});

console.log("Connecting to the database...");
client.connect();
console.log("Connected to the database");

export default client;