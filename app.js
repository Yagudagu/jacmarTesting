const express = require('express');
//const fs = require("fs");
const htmlHome = require('./index')
const path = require('path');
// const { nextTick } = require('process');
// const mongo = require('mongodb');
// const assert = require('assert');

console.log('before express')

const app = express();


console.log('after express')

//const htmlHome = fs.readFileSync(`${__dirname}/index.html`);
app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
    res.writeHead(200, { "Content-type": "text/html"})
    res.end(htmlHome);
});

console.log('after response')

app.get('/crash', (next) => {
    const david = 19;
    //balls();
    next();
});

const port = 80;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})