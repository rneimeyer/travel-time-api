require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT
const travellerController = require('./controllers/travellerController')
const tripController = require('./controllers/tripController')
const hotelController = require('./controllers/hotelController')
const flightController = require('./controllers/flightController')
const activityController = require('./controllers/activityController')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.get('/', function(req, res) {
    res.send('Welcome to the Travel Time API. Please try /traveller, /trip, /hotel, or /flight to see more')
})

app.use('/traveller', travellerController)
app.use('/trip', tripController)
app.use('/hotel', hotelController)
app.use('/flight', flightController)
app.use('/activity', activityController)


app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})


//heroku link: https://apple-sundae-53642.herokuapp.com/