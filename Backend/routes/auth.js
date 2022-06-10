const express = require("express");
const path = require("path");

const router = express.Router();




//default auth route
router.get("/", async (req, res) => {
  console.log("hit roo auth path");
  const url="http://localhost:4000/goals"
  res.render("authorize", { url: url });
});



module.exports = router;
