const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const posts = require("./routes/posts");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', async (req, res) => {
  await res.send('hey')
});
connectDB();

app.use("/api/posts", posts);


const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`listening on port ${port}`);
});