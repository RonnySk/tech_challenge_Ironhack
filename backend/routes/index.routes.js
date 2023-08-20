const router = require("express").Router();
const phonesList = require("../data/phones.json");

router.get("/phones", (req, res, next) => {
  res.json(phonesList);
});

router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;

  const onePhone = phonesList.find((phone) => phone.id == id);

  console.log(onePhone);

  res.json(onePhone);
});

module.exports = router;
