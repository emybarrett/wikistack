const router = require("express").Router();
const addPage = require("../views/addPage");


router.get("/", (req, res) => {
  res.send('here are our pages');
});

router.post("/", (req, res) => {
  res.send("submit a new page to the database");
});

router.get("/add", (req, res) => {
  res.send(addPage());
})

module.exports = router;