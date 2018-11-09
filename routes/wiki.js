const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("retrieve all wiki pages");
});

router.post("/", (req, res) => {
  res.send("submit a new page to the database");
});

router.get("/add", (req, res) => {
  res.send("retrieve the 'add a page' form");
})

module.exports = router;