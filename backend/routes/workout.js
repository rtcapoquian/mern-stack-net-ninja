const express = require("express");
//import controller and use it in the router
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const router = express.Router();
//get all workouts, get a workout, create a workout, update a workout, delete a workout
router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);
//create a json file with the following data:
// {
//     "title": "Bench Press",
//     "reps": 5,
//     "load": 225
// }
module.exports = router;
