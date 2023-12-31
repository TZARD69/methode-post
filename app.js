require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;

const welcome = (req, res) => {
  res.send("Welcome to my favourite users list");
};

app.get("/", welcome);

app.use(express.json());

const movieHandlers = require("./moviesHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.post("/api/movies", movieHandlers.postMovie);

const usersHandlers = require("./usersHandlers");


app.get("/api/users", usersHandlers.getUsers);
app.get("/api/users/:id", usersHandlers.getUsersById);
app.put("/api/users/:id", usersHandlers.updateUsers);
app.post("/api/users", usersHandlers.postUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
