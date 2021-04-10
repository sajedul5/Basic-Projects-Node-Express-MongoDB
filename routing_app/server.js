const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

const route = require('./router');

//const port = process.env.PORT || 3500;
const port = process.env.PORT || 5000;


app.use('/api', route);

// home route

app.get('/', (req,res) => {
    res.end('Routing App...!');
});

app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
});