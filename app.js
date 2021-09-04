const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const port = process.env.PORT||5000;
const dbName="test";
const corsOpts = {
  origin: '*',
  methods:'*',
  allowedHeaders:[
    'Content-Type',
    'Authorization',
    'index'
  ]
}
app.use(cors(corsOpts))
require('./models/index')
require('./routes/index')(app)

mongoose.connect(process.env.URI||`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.listen(port)
  console.log(`listening to port: ${port}`)
});