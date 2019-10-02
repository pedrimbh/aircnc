const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
mongoose.connect(
  "mongodb+srv://pedrimbh:1301420jp@cluster0-fhwyp.mongodb.net/aircnc?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use(express.json());

app.use(routes);

app.listen(4444);
