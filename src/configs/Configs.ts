import { Collection, MongoClient } from "mongodb";

export const mongoDBInstance = async (): Promise<Collection> => {
    const uri = process.env.MONGO_DB_URL;
    const client = new MongoClient(uri);
    return await (await client.connect()).db('test').collection('devices')
}