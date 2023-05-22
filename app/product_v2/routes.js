const router = require('express').Router();
const Product = require('./model');
const multer = require ('multer');
const upload = multer({dest:'uploads'});
const path = require('path');
const fs = require('fs');

//input data
router.post('/product', upload.single('image'), async (req, res) =>{
    const {users_id, name,price,stock, status} = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
    
        try {
            await Product.sync();
            const result =await  Product.create({users_id, name,price,stock, status, image_url:`http://localhost:3000/public/${image.originalname}`});
            res.send(result);
        } catch (e) {
            res.send(e);
        }
    }
});

//menampilkan data
router.get('/product', async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error('Gagal mendapatkan produk:', error);
      res.status(500).json({ error: 'Gagal mendapatkan produk' });
    }
  });

  router.get('/product/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Produk tidak ditemukan' });
      }
    } catch (error) {
      console.error('Gagal mendapatkan produk:', error);
      res.status(500).json({ error: 'Gagal mendapatkan produk' });
    }
  });

//update data
  router.put('/product/:id', upload.single('image'), async (req, res) => {
    try {
      const { id } = req.params;
      const { users_id, name, price, stock, status } = req.body;
      const image = req.file;
  
      if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
  
        const updatedProduct = await Product.update(
          {
            users_id,
            name,
            price,
            stock,
            status,
            image_url: `http://localhost:3000/public/${image.originalname}`,
          },
          {
            where: { id },
          }
        );
  
        if (updatedProduct[0] === 1) {
          const updatedRecord = await Product.findByPk(id);
          res.status(200).json(updatedRecord);
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

  //Delete data

  router.delete('/product/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedProduct = await Product.destroy({
        where: { id },
      });
  
      if (deletedProduct === 1) {
        res.status(200).json({ message: 'Produk berhasil dihapus' });
      } else {
        res.status(404).json({ error: 'Produk tidak ditemukan' });
      }
    } catch (error) {
      console.error('Gagal menghapus produk:', error);
      res.status(500).json({ error: 'Gagal menghapus produk' });
    }
  });






module.exports = router;