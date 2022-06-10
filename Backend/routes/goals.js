const express = require("express");
const path = require("path");

const router = express.Router();




//default auth route
router.get("/", async (req, res) => {
  console.log("hit roo auth path");
  res.render("done");
});



module.exports = router;
