// const dbConfig = require('../config/db.config');
// abcd1234
const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://DeviDas:abcd1234@cluster0-lwwxn.mongodb.net/test?retryWrites=true&w=majority";

async function getPosts() {
  const client = await new MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch(err => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("Demo");

    let collection = db.collection("Posts");

    let query = {};

    let result = await collection.find();

    return result;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

async function addPost(postedBy, postedComment) {
  const client = await new MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch(err => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("Demo");

    let collection = db.collection("Posts");

    collection.insertOne({
      postedBy,
      postedComment
    });

    console.log("added a post");
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

async function updatePost(postedBy, postedComment) {
  const client = await new MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch(err => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("Demo");

    let collection = db.collection("Posts");

    collection.updateOne(
      {
        postedBy
      },
      {
        $set: {
          postedComment: postedComment
        }
      }
    );

    console.log("updated a post");
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

async function deletePost(postedBy) {
    const client = await new MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).catch(err => {
      console.log(err);
    });
  
    if (!client) {
      return;
    }
  
    try {
      const db = client.db("Demo");
  
      let collection = db.collection("Posts");
  
      collection.deleteOne({
          postedBy
      }
      );
  
      console.log("deleted a post");
    } catch (err) {
      console.log(err);
    } finally {
      client.close();
    }
  }

module.exports.getPosts = getPosts;
module.exports.addPost = addPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;