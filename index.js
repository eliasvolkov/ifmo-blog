const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const posts = require("./routes/posts");
const path = require('path')
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

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`listening on port ${port}`);
});