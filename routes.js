
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile('tracker.html', { root: `${__dirname}/api` });
  })
  app.post("/update", (req, res) => {
    console.log(req.body);
    res.json({ hello: 'other side' })
  })
}
