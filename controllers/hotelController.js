//hotel controller
const express = require('express');
const router = express.Router();

//import model
const Hotel = require("./../models/Hotel")

//returns all hotels
router.get("/", (req, res) => {
    Hotel.find({}).then((hotel) => {
        res.json({
            status: 200,
            hotel: hotel,
        });
    });
});

//returns a single hotel and its data
router.get("/:id", (req, res) => {
    Hotel.findById(req.params.id).then((hotel) => {
        res.json({
            status: 200,
            hotel: hotel,
        })
    })
})

//create new hotel
router.post("/", (req, res) => {
    const hotelData = req.body;
    Hotel.create(hotelData).then((hotel) => {
        res.json({
            status: 200,
            hotel: hotel,
        })
    })
})

//update hotel
router.put("/:id", (req, res) => {
    Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((hotel) => {
        res.json({
            status: 200,
            hotel: hotel,
        })
    })
})

//delete hotel
router.delete("/:id", (req, res) => {
    Hotel.findByIdAndDelete(req.params.id).then((hotel) => {
        res.json({
            status: 200,
            hotel: hotel,
        })
    })
})


module.exports = router;