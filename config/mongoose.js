const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.PORT)
const data = require('../resource');
console.log(data);
const { MongoClient } = require('mongodb');

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main() {
    const uri = data;
    console.log(uri);
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
        await client.connect();
        await listDatabases(client);
    }
    catch (error) {
        console.log(`error while connecting : ${error}`);
    }
    finally {
        await client.close();
    }

}

main().catch(err => {
    console.log(err);
})