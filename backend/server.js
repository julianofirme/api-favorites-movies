const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes");

const app = express();

require("dotenv").config();
const port = process.env.PORT;
const MONGO = process.env.MONGO_URL;

mongoose
  .connect(MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB error: " + err));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server running on port ${port}!`));
