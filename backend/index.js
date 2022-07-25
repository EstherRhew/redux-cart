const express = require("express");
const { config } = require("dotenv");
const database = require("./config/database");
const cors = require("cors");

const app = express();

config();

database();

app.use(cors({
  exposedHeaders: ['Authorization'],
}));
app.use(express.json());

app.use("/api/market", require("./routes/marketRoute"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})