require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const beginnerRoutes = require('./routes/beginner')
const intermediateRoutes = require('./routes/intermediate')
const advanceRoutes = require('./routes/advance')


// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/courses', beginnerRoutes)
app.use('/api/courses', intermediateRoutes)
app.use('/api/courses', advanceRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })