const router = require("express").Router();
const phonesList = require("../data/phones.json");

// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

router.get("/phones", (req, res, next) => {
  res.json(phonesList);
});

router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;

  const onePhone = phonesList.find(id);

  console.log(onePhone);

  res.json("test");
});

module.exports = router;
