const express = require('express');
const app = express();
const router = require('./routes');
const log =require('./middlewares/log')



app.use(log);
app.use(router);
app.use((req, res,next) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: 'Resource' + req.originalUrl   + ' Not found'
    })
})

app.listen(3000, () => console.log('Server: http://localhost:3000'))