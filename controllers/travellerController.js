//traveller controller
const express = require('express');
const router = express.Router();

//import model
const Traveller = require("./../models/Traveller")

//returns all travellers and their data
router.get("/", (req, res) => {
    Traveller.find({}).populate('trips').then((traveller) => {
        res.json({
            status: 200,
            traveller: traveller,
        });
    });
});

//returns a single traveller and their data
router.get("/:id", (req, res) => {
    Traveller.findById(req.params.id).populate('trips').then((traveller) => {
        res.json({
            status: 200,
            traveller: traveller,
        })
    })
})

//create new traveller
router.post("/", (req, res) => {
    const travellerData = req.body;
    Traveller.create(travellerData).then((traveller) => {
        res.json({
            status: 200,
            traveller: traveller,
        })
    })
})

//update traveller
router.put("/:id", (req, res) => {
    Traveller.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((traveller) => {
        res.json({
            status: 200,
            traveller: traveller,
        })
    })
})

//delete traveller
router.delete("/:id", (req, res) => {
    Traveller.findByIdAndDelete(req.params.id).then((traveller) => {
        res.json({
            status: 200,
            traveller: traveller,
        })
    })
})


module.exports = router;