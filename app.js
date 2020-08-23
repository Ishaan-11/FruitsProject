const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri,{useNewUrlParser: true, useUnifiedTopology: true});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    const database = client.db("fruitsDB");
    console.log("Connected successfully to server");
    await insertDocument(database);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

 async function insertDocument(database, callback) {
  //get the documents collection
  const collection = database.collection("fruits");
  //insert some documents
  const fruitsDocuments = [
    { 
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    { 
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
    { 
      name: "Banana",
      score: 9,
      review: "Great stuff!"
    }
  ];
  const result = await collection.insertMany(fruitsDocuments);
}

