const express = require("express");
const {getItemList} = require("../controllers/marketController");

const router = express.Router();

router.get("/getItemList", getItemList);

module.exports = router;