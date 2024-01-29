"use server";
import { MongoClient } from "mongodb";

async function ConnectToDatabase(uri: string): Promise<MongoClient | null> {
  const { MongoClient: MongoDbClient, ServerApiVersion } = require("mongodb");
  const client = new MongoDbClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();

  console.log("Connected");
  return client;
}

export async function CheckConnection(uri: string | null): Promise<string> {
  try {
    if (uri) {
      const client: MongoClient | null = await ConnectToDatabase(uri);

      const pingResult = await client?.db("admin").command({ ping: 1 });

      if (pingResult && pingResult.ok === 1) {
        return "true";
      } else {
        return "false";
      }
    }
  } catch (error) {
    if (typeof error === "string") {
      // TypeScript should know it's a string here
      return error;
    } else if (error instanceof Error) {
      // Check that it's an actually Error object, before trying to access the error message
      return error.message;
    }
  }
  return "";
}

export async function ListDatabases(uri: string | null) {
  try {
    if (uri) {
      const client: MongoClient | null = await ConnectToDatabase(uri);

      if (client) {
        const adminDb = client.db("admin");
        const result = await adminDb.admin().listDatabases();

        let list: string[] = [];
        result.databases.map((db) => {
          list.push(db.name);
        });
        return list;
      }
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function ExtractData(uri: string | null) {
  try {
    if (uri) {
      const client: MongoClient | null = await ConnectToDatabase(uri);
      const database = client?.db("sample_mflix");

      if (database) {
        const movies = await database
          .collection("movies")
          .find({})
          .sort({ metacritic: -1 })
          .limit(20)
          .toArray();

        console.log(movies);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
