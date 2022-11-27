const express = require("express");

const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51KC2YVHMZjcwCZXiC0atPFSEt5PBHSVW7l9IUxHOG1yprXkm3mEyOhyMFs1ry3BWX5Q0OjpqPeWNByyoNZhYdrwe00bZCAexoa"
);

router.post("/booKCar", async (req, res) => {
  //req.body.transactionId = "1234";
  const token = req.body;
  try {
    
    const payment = await stripe.paymentIntents.create({
      amount: req.body.totalAmount * 100,
      currency: "eur",
      receipt_email: token.email,
    });
    if (payment) {
      req.body.transactionId = payment.id;
      console.log(req.body);
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const car = await Car.findOne({ _id: req.body.car });
      console.log(car);
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);
      await car.save(); 
      res.send("Your booking is successful");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.get("/getallbookings", async(req,res)=>{
    try{
        const bookings = await Booking.find().populate('car')
        res.send(bookings)
    }catch(error){
        return res.status(400).json(error);

    }
})

module.exports = router;
