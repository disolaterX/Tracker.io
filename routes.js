
const fs = require('fs');

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile('tracker.html', { root: `${__dirname}/api` });
  })
  app.post("/update", (req, res) => {
    const { username } = req.body
    delete req.body.username
    fs.readFile('api/results.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data); //now it an object
        if (!obj[username]) {
          obj[username] = []
        }
        obj[username].push(req.body); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('api/results.json', json, 'utf8', () => { }); // write it back 
      }
    });
    res.sendStatus(200)
  })
  app.post("/get", (req, res) => {
    const { username } = req.body

    fs.readFile('api/results.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
        res.json({ error: err })
      } else {
        obj = JSON.parse(data);
        res.json(obj[username])
      }
    })

  })
}
