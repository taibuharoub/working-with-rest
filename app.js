const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
require("dotenv").config();

const feedRoutes = require("./routes/feed");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

app.use("/api/v1/feed", feedRoutes);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`.yellow.bold);
});
