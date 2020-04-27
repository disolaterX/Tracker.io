require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const compress = require("compression");
const cors = require("cors");
const registerApi = require("./routes.js");


const app = express()
  // .use(compress())
  .use(cors())
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(bodyParser.json());

// Registering API Routes
registerApi(app);

app.listen(process.env.PORT || 5000);
