const express = require('express');
//const fs = require("fs");
const htmlHome = require('./index')
const path = require('path');
const snat = require('./snatStuff')
// const { nextTick } = require('process');
// const mongo = require('mongodb');
// const assert = require('assert');



const app = express();




//const htmlHome = fs.readFileSync(`${__dirname}/index.html`);
app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
    res.writeHead(200, { "Content-type": "text/html"})
    res.end(htmlHome);
});



app.get('/crash', (next) => {
    const david = 19;
    //balls();
    next();
});

snat.snatRepro()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})