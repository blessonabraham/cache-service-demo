import { Collection, MongoClient } from "mongodb";

export const mongoDBInstance = async (): Promise<Collection> => {
    const uri = "mongodb+srv://test:test@cluster0.ux70r.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    // client.connect(err => {
    //     console.log('Connected to Database')
    //     const collection = client.db("test").collection("devices");
    //     collection.insertOne({ id: 1, firstName: 'Steve', lastName: 'Jobs' })
    // });
    return await (await client.connect()).db('test').collection('devices')
}