//flight controller
const express = require('express');
const router = express.Router();

//import model
const Flight = require("./../models/Flight")

//returns all flights
router.get("/", (req, res) => {
    Flight.find({}).then((flight) => {
        res.json({
            status: 200,
            flight: flight,
        });
    });
});

//returns a single flight and its data
router.get("/:id", (req, res) => {
    Flight.findById(req.params.id).then((flight) => {
        res.json({
            status: 200,
            flight: flight,
        })
    })
})

//create new flight
router.post("/", (req, res) => {
    const flightData = req.body;
    Flight.create(flightData).then((flight) => {
        res.json({
            status: 200,
            flight: flight,
        })
    })
})

//update flight
router.put("/:id", (req, res) => {
    Flight.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((flight) => {
        res.json({
            status: 200,
            flight: flight,
        })
    })
})

//delete flight
router.delete("/:id", (req, res) => {
    Flight.findByIdAndDelete(req.params.id).then((flight) => {
        res.json({
            status: 200,
            flight: flight,
        })
    })
})


module.exports = router;