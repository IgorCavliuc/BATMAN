const express = require("express");
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("./db");
const cors = require("cors");

const PORT = 3000;

const app = express();
app.use(express.json());

let db;

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

app.get("/navigation", (req, res) => {
  const navigation = [];

  db.collection("navigation")
    .find()
    .sort({ title: 1 })
    .forEach((nav) => navigation.push(nav))
    .then(() => {
      res.status(200).json(navigation);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.get("/products", async (req, res) => {
  try {
    const products = await db.collection("products")
                             .find(req?.query)
                             .sort()
                             .toArray();
    res.status(200).json(products);
  } catch (error) {
    handleError(res, "Something went wrong...");
  }
});

