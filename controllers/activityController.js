//activity controller
const express = require('express');
const router = express.Router();

//import model
const Activity = require("./../models/Activity")

//returns all activities
router.get("/", (req, res) => {
    Activity.find({}).then((activity) => {
        res.json({
            status: 200,
            activity: activity,
        });
    });
});

//returns a single activity and its data
router.get("/:id", (req, res) => {
    Activity.findById(req.params.id).then((activity) => {
        res.json({
            status: 200,
            activity: activity,
        })
    })
})

//create new activity
router.post("/", (req, res) => {
    const activityData = req.body;
    Activity.create(activityData).then((activity) => {
        res.json({
            status: 200,
            activity: activity,
        })
    })
})

//update activity
router.put("/:id", (req, res) => {
    Activity.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((activity) => {
        res.json({
            status: 200,
            activity: activity,
        })
    })
})

//delete activity
router.delete("/:id", (req, res) => {
    Activity.findByIdAndDelete(req.params.id).then((activity) => {
        res.json({
            status: 200,
            activity: activity,
        })
    })
})


module.exports = router;