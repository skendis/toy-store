const consts = require('../consts.js');
const MongoClient = require('mongodb').MongoClient;
const { ATLAS_URL } = consts;

const dbName = 'toysDb';
let dbConn = null;
// const url = (process.env.NODE_ENV === 'production') ? ATLAS_URL : 'mongodb://localhost:27017';
async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(ATLAS_URL, { useNewUrlParser: true });
        const db = client.db(dbName);
        dbConn = db;
        console.log('\x1b[36m%s\x1b[0m', `[mongodb] connected to ${dbName} on Atlas`);
        return db;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

module.exports = {
    connect,
    getCollection
}
