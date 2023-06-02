const router = require ('express').Router();
const multer = require('multer');
const upload = multer ({dest: 'uploads'});
const Product = require('./model');
const fs = require('fs');
const path = require('path');

//input data product
router.post('/product', upload.single('image'),(req,res) => {
    const {name, price,stock,status} =req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
        Product.create({name, price,stock,status, image_url: `http://localhost:3000/public/${image.originalname}`})
            .then(result => res.send(result))
            .catch(error => res.send(error));
}
});

//menampilkan semua  data product
router.get('/product',(req,res) => {
    Product.find()
    .then(result => res.send(result))
    .catch(result => res.send(result));
});

//menampilkan data product berdasarkan Id
router.get('/product/:id', (req, res) => {
    const productId = req.params.id;
  
    Product.findById(productId)
      .then(result => res.send(result))
      .catch(error => res.send(error));
  });

//update data product berdasarkan Id
router.put('/product/:id', upload.single('image'), async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, stock, status } = req.body;
      const image = req.file;
  
      if (image) {
        const updatedData = {
          name,
          price,
          stock,
          status,
          image_url: `http://localhost:3000/public/${image.originalname}`,
        };
  
        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
  
        if (updatedProduct) {
          res.status(200).json(updatedProduct);
        } else {
          res.status(404).json({ error: 'Produk tidak ditemukan' });
        }
      } else {
        res.status(400).json({ error: 'Gambar tidak ditemukan' });
      }
    } catch (error) {
      console.error('Gagal memperbarui produk:', error);
      res.status(500).json({ error: 'Gagal memperbarui produk' });
    }
  });

  //mengapus data berdasarkan id 
  router.delete('/product/:id', (req, res) => {
    const productId = req.params.id;
  
    Product.findByIdAndDelete(productId)
      .then(result => {
        if (result) {
          res.send('Product berhasil dihapus');
        } else {
          res.status(404).send('Product tidak ditemukan');
        }
      })
      .catch(error => res.send(error));
  });


module.exports=router;