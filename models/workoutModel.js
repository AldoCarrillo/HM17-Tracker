const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Number,
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
},{ typeKey: '$type' });


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
