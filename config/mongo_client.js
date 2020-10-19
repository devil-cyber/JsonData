const dotenv = require("dotenv").config({ path: "../.env" });

const { MongoClient } = require("mongodb");

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function main() {
    const uri = process.env.URI;
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
        await client.connect();
        await listDatabases(client);
    } catch (error) {
        console.log(`error while connecting : ${error}`);
    } finally {
        await client.close();
    }
}

main().catch((err) => {
    console.log(err);
});
