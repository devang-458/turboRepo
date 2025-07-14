import express from "express";
import cors from "cors";
import { prisma } from "@repo/db/client";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello sir");
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  const response = await prisma.user.create({
    data: {
      name: name,
      password: password,
    },
  });
});

app.listen(3002, () => {
  console.log("server is running");
});
