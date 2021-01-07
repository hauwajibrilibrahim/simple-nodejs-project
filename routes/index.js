var express = require("express");
const { render } = require("pug");
var router = express.Router();

var data = "Any string";
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("//", (req, res) => {
  console.log("// endpoint called");
  res.json({
    status: "success",
  });
});
router.post("/data", (req, res) => {
  req.body.data;
  res.json({ data });
});
router.get("/data", (req, res) => {
  console.log("/data endpoint called");
  res.json({ data });
});
module.exports = router;
