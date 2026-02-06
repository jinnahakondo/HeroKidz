
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

//collections
export const collection = {
  "PRODUCTS": "products",
  "USERS": "users",
}

if (!uri) throw new Error('uri not defined')

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

await client.connect();
// Send a ping to confirm a successful connection
await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");

export const connectDb = async (cName) => {
  const coll = client.db(process.env.DBNAME).collection(cName)
  return coll
}

// export const userColl = await connectDb(collection.USERS)
