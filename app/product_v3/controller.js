const { ObjectId } = require('mongodb');
const db = require('../../config/mongodb');
const fs = require('fs');
const path = require ('path');



//menampilkan semua data
const index = (req, res) => {
    db.collection('products').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

// Menampilkan data berdasarkan id
const view = (req, res) => {
    const id = new ObjectId(req.params.id); 
    db.collection('products')
        .findOne({ _id: id })
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

// Menginput data 
const store = (req, res) => {
    const {name, price,stock,status} =req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
        db.collection('products').insertOne({name, price,stock,status, image_url: `http://localhost:3000/public/${image.originalname}`})
            .then(result => res.send(result))
            .catch(error => res.send(error));
}
}

// update data 
const update = (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.file;
  
    if (image) {
      const target = path.join(__dirname, '../../uploads', image.originalname);
      fs.renameSync(image.path, target);
  
      const updateData = {
        name,
        price,
        stock,
        status,
        image_url: `http://localhost:3000/public/${image.originalname}`
      };
  
      db.collection('products').updateOne(
        { _id: new ObjectId(req.params.id) }, // Kriteria pemilihan dokumen yang akan diperbarui
        { $set: updateData } // Perbarui field dengan data baru
      )
        .then(result => res.send(result))
        .catch(error => res.send(error));
    }
  }

  // hapus data berdasarkan Id
  const deleteData = (req, res) => {
    const id = req.params.id;
  
    db.collection('products').deleteOne({ _id: new ObjectId(id) })
      .then(result => {
        if (result.deletedCount > 0) {
          res.send('Data Sudah terhapus');
        } else {
          res.send('Id tidak ditemukan');
        }
      })
      .catch(error => res.send(error));
  }


module.exports = {
    index,
    view,
    store,
    update,
    deleteData
    
}