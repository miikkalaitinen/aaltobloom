
const express = require('express')
const path = require('path');
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

app.use(express.static('build'));

app.get("/api/events" , function (req, res) {

    axios.get(ENDPOINT).then(response => {
      res.json({data : response.data});
  }).catch((err) => {
      res.json(err);
  })
})

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.SERVER_PORT || 5000, () => console.log('Server online in http://localhost:5000/api/events'));