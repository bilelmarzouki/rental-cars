const express = require('express')
const app = express()
const port = 5000
const dbConnection =require('./db')()
const ObjectId = require("mongodb").ObjectId
const Car =require("./models/carModel")
var cors =require("cors")



const usersRoute = require('./routes/usersRoute')
const carsRoute = require('./routes/carsRoute')

app.use(express.json({extend: true}));
app.use(cors())

app.use("/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));
app.get('/', (req, res) => res.send('Hello World!'))
app.get("/api/cars/getallcars",async (req, res) => {
    const carsData = await Car.find();
  res.json(carsData);
});
app.listen(port, () => console.log(`Node js Server started ${port}!`))