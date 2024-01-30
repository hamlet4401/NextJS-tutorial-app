"use server";
import { MongoClient, Db, Collection } from "mongodb";

async function ConnectToDatabase(uri: string): Promise<MongoClient | null> {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    return client;
  } catch (error) {
    console.error(`Failed to connect to the database. ${error}`);
    return null;
  }
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
      return error;
    } else if (error instanceof Error) {
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

export async function ListCollections(
  database: string,
  uri: string | null
): Promise<string[]> {
  if (!uri) {
    console.error("No connection URI provided.");
    return [];
  }

  try {
    const client = await ConnectToDatabase(uri);
    if (!client) {
      return [];
    }

    const connectedDatabase: Db = client.db(database);
    const collections: Collection[] = await connectedDatabase.collections();

    return collections.map((collection) => collection.collectionName);
  } catch (error) {
    console.error(`Failed to list collections. ${error}`);
    return [];
  }
}
// Write me a function that takes takes a collection as a string as input with the uri and returns the documents in that collection as a list of strings.
export async function ListDocuments(
  database: string,
  collection: string,
  uri: string | null
): Promise<string[]> {
  if (!uri) {
    console.error("No connection URI provided.");
    return [];
  }

  try {
    const client = await ConnectToDatabase(uri);
    if (!client) {
      return [];
    }

    const documents = await client
      .db(database)
      .collection(collection)
      .find()
      .limit(2)
      .toArray();
    const content = documents.map((doc) => JSON.stringify(doc));
    return content;
  } catch (error) {
    console.error(`Failed to list documents. ${error}`);
    return [];
  }
}
