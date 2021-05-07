exports.snatRepro = http.get({
    port: 80,
    path: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    // agent: false  // create a new agent just for this one request
  }, (res) => {
    console.log(res)
  });