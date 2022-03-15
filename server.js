
const express = require('express');
const cors = require('cors')
const axios = require('axios')
const app = express();
require('dotenv').config();

app.use(express.json());

const ORIGIN = process.env.ORIGIN
const ENDPOINT = process.env.ENDPOINT

app.use(cors({
  origin: [ORIGIN],
  methods: ["GET","POST","DELETE"],
  credentials: true,
}));

app.get("/events" , function (req, res) {

    axios.get(ENDPOINT).then(response => {
      res.json({data : response.data});
  }).catch((err) => {
      res.json(err);
  })
})

app.listen(process.env.SERVER_PORT, () => console.log('Server online!'));