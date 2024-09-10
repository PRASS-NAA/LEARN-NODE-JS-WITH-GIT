import { MongoClient } from 'mongodb';

const url = "mongodb://127.0.0.1";
const client = new MongoClient(url);
const dbName = 'prass';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('student');
  
    // the following code examples can be pasted here...

    let findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    let updatedDocument = await collection.updateOne({name:"Prasanna Narayanan N"},{$set: {name: "Papaya"}});
    console.log(updatedDocument["acknowledged"]);
  
    return 'done.';
}


main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());