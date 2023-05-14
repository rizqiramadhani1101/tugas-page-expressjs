const router = require('express'). Router();

router.get('/', (req,res) => {
    res.send({
        status: 'Successfully',
        message: 'Welcome to Tugas Express Js '
    })
});

router.get('/home', (req,res) => {
    const {page, total} = req.query;
    res.send({
        status: 'Successfully',
        message: 'Welcome to Tugas Express Js ',
        page ,
        total
    })
});



router.get('/product/:id', (req,res) => {
    
    res.json ({
        id:req.params.id
    });
});


router.get('/:category/:tag', (req, res) => {
    const {category, tag} = req.params;
    res.json({category, tag})
})



module.exports = router;