const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const port = process.env.PORT;
const corsOptions = {
  origin: '*',
  methods:'*',
  allowedHeaders:[
    'Content-Type',
    'Authorization',
    'index'
  ]
}
app.use(cors(corsOptions))
require('./models/index')
require('./routes/index')(app)

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.listen(port)
  console.log(`listening to port: ${port}`)
});