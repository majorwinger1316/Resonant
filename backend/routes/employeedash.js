const router = require("express").Router();
const { Info } = require("../models/infos");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query; // Extract the user's name from query parameters

    // Query the database to retrieve machine information associated with the logged-in user's name
    const machines = await Info.find({ Employee: name });

    res.status(200).send(machines);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
