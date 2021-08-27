// /api/new-meetup

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://admin-ayush:Ag747492@@@cluster0.2u0iu.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const collection = db.collection("meetups");

    const result = await collection.insertOne(data);
    console.log(result);

    client.close();
    
    res.status(201).json({
      message: "New meetup created successfully",
    });
  }
}

export default handler;
