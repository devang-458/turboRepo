import express from "express";

const app = express();

app.get("/chat", (req, res) => {
  res.send("Hello World");
});

app.get("/signup", (req, res) => {
  res.send("Hello signup");
});

app.get("/signin", (req, res) => {
  res.send("Hello  signin");
});

app.listen(3001, () => {
  console.log("server is running")
});
