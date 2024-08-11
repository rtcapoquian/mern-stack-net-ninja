//create a workout controllers
//get all workouts, get a workout, create a workout, update a workout, delete a workout
//export the controllers
const Workout = require("../models/workoutModel");
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
