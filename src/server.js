const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ msg: "Pedro word" });
});

app.listen(4444);
