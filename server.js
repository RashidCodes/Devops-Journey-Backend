const express = require('express')
const app = express()
const port = 2005
const cors = require('cors')
const mongoose = require('mongoose')
const nameSchema = require('./schema')

app.use(cors())
app.use(express.json())


// connect to the mongodb database
mongoose.connect('mongodb://mongo:27017/names', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => console.log("Successfully connected to database"))
.catch(err => console.log("Error connecting to database",  err));

// Data model
const Name = mongoose.model('Name', nameSchema)

app.post('/add', (req, res) => {
  const { name } = req.body
  const name_ = new Name({name});
  name_.save()
  .then(() => res.send('Successfully added name'))
  .catch(err => console.log(err))
})


app.get('/', (req, res) => {
  Name.find().then(results => {
    res.send(results)
  }).catch(err => console.log(err))
})

app.listen(port, () => console.log(`Listening on port ${port}`))



