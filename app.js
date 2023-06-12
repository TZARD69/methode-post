require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;

const usersHandlers = require("./usersHandlers");

const welcome = (req, res) => {
  res.send("Welcome to my favourite users list");
};

 app.get("/", welcome);

 app.use(express.json());
 app.post("/api/users", usersHandlers.postUser);

 app.get("/api/users", usersHandlers.getUsers);
app.get("/api/users/:id", usersHandlers.getUsersById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
