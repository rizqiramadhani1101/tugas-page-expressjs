const {MongoClient} = require('mongodb');

const url = 'mongodb://eduwork:1234@127.0.0.1:27017?authSource=admin';

const client = new MongoClient(url);

//callback
(async () => {

    try {
        await client.connect();
        console.log('koneksi mongodb Berhasil');

    }catch (e) {
        console.log(e)
    }
})();


const db = client.db('eduwork-mongo');

module.exports = db;