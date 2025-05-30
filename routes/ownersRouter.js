const express = require("express");
const router = express.Router();
const ownerModel = require("../models/OwnerModel");

router.get("/", (req, res) => {
  res.send("Welcome to the owners page");
});
router.post("/create", async (req, res) => {
  let owner = await ownerModel.find();
  if (owner.length > 0) {
    res.status(400).send("The Owner already exists");
  } else {
    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(200).send(createdOwner);
  }
});

module.exports = router;
