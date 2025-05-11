const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.rendex("index");
});
module.exports = router;
