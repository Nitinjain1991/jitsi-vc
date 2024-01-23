import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.db; // Assuming you set the 'db' variable to 'user-1'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  let client;

  try {
    // Connect to MongoDB
    client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(DB_NAME);
    const collection = db.collection('user-data-1');

    // Fetch data from MongoDB
    const userData = await collection.find({}).toArray();

    return res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    // Close the MongoDB connection
    if (client) {
      await client.close();
    }
  }
}
