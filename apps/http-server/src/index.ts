import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello sir");
});

app.listen(3002, () => {
  console.log("server is running");
});
