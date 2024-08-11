require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT;
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () =>
      console.log(`connected on db and listening on port ${port}!`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
