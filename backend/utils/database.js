const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://server:Fj87ylwQAYGntuLO@cluster0.45ik5wr.mongodb.net/";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;
