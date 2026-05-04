const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json()); // IMPORTANT
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/your_Db")
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database connection failed"));

const newschema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    contact: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
const User = mongoose.model("User", newschema);

app.post("/user", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});