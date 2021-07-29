const express = require("express");
const fs = require("fs");
const htmlHome = require("./index");
const path = require("path");
// const { nextTick } = require('process');
// const mongo = require('mongodb');
// const assert = require('assert');
const http = require("http");

const app = express();

const theFile = fs.readFileSync(`${__dirname}/thisisit.txt`);

const fileString = theFile.toJSON();

//const htmlHome = fs.readFileSync(`${__dirname}/index.html`);
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlHome);
});

app.get("/crash", (next) => {
  const david = 19;
  //balls();
  next();
});

app.get("/snatPortExhausion", (req, res, next) => {
  let = 1;
  for (i = 0; i < 90; i++) {
    http.get(
      {
        host: "google.com",
        port: 80,
        path: "/",
        // agent: false  // create a new agent just for this one request
      },
      (res) => {}
    );
    console.log(i);
  }

  res.status(200).json({
    status: "did it",
    data: i,
  });
});

app.get("/file", (req, res, next) => {
  console.log("balls");
  res.status(200).send(theFile);
});

const port = process.env.PORT || 3000;
// const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
