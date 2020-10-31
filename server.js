// Add code to userModel.js to complete the model

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//const User = require("./userModel.js");
const Exercise = require("./models/exerciseModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Routes

// Route to post our form submission to mongoDB via mongoose




app.post("/submit", (req, res) => {
  

/*
  const user = new User(req.body);
  user.setFullName();
  user.lastUpdatedDate();


  User.create(user)
    .then(dbUser => {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(err => {
      // If an error occurs, send the error to the client
      res.json(err);
    });
*/

});









app.get("/api/workouts", (req, res) => {



});


app.put("/api/workouts/:id", (req, res) => {

      var id = req.params.id;




});


app.post("/api/workouts", (req, res) => {
      

      const exercise = new Exercise(req.body);
      Exercise.create(exercise)
    .then(dbExercise => {
      // If saved successfully, send the the new User document to the client
      res.json(dbExercise);
    })
    .catch(err => {
      // If an error occurs, send the error to the client
      res.json(err);
    });



});

app.post("/api/workouts/range", (req, res) => {



});







// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
