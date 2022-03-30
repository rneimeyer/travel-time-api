//trip controller
const express = require('express');
const router = express.Router();

//import model
const Trip = require("./../models/Trip")

//returns all trips
router.get("/", (req, res) => {
    Trip.find({}).populate('flights').populate('hotels').then((trip) => {
        res.json({
            status: 200,
            trip: trip,
        });
    });
});

//returns a single trip and its data
router.get("/:id", (req, res) => {
    Trip.findById(req.params.id).populate('flights').populate('hotels').then((trip) => {
        res.json({
            status: 200,
            trip: trip,
        })
    })
})

//create new trip
router.post("/", (req, res) => {
    const tripData = req.body;
    Trip.create(tripData).then((trip) => {
        res.json({
            status: 200,
            trip: trip,
        })
    })
})

//update trip
router.put("/:id", (req, res) => {
    Trip.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((trip) => {
        res.json({
            status: 200,
            trip: trip,
        })
    })
})

//delete trip
router.delete("/:id", (req, res) => {
    Trip.findByIdAndDelete(req.params.id).then((trip) => {
        res.json({
            status: 200,
            trip: trip,
        })
    })
})


module.exports = router;