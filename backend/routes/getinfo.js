const router = require("express").Router();
const { Info } = require("../models/infos");

router.get("/", async (req, res) => {
  try {
    // Query the database to retrieve all machine information
    const machines = await Info.find();

    res.status(200).send(machines);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
