import express from "express";
import "dotenv/config";
import grades from "./routes/grades.js";
// import grades_agg from "./routes/grades_agg.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Body parser middleware
app.use(express.json());

// test db connection
// import db from "./db/conn.js";

const learner_grade = new grades({
  learner_id: 1,
  class_id: 300,
  scores: [100, 100, 50, 70, 85],
});

app.get("/", async (req, res) => {
  let id_1 = await grades.findOne();
  console.log(id_1);
  res.send(id_1);
});

const add = async () => {
  try {
    await learner_grade.save();
    console.log("learner added to the db");
  } catch (e) {
    console.log("Error:", e);
  }
};

add();

app.use("/grades", grades);
// app.use("/grades", grades_agg);

//Global Error handling middlware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
