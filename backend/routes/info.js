const router = require("express").Router();
const { Info, validate } = require("../models/infos");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const existingInfo = await Info.findOne({
      Machinenumber: req.body.Machinenumber,
    });
    if (existingInfo)
      return res.status(409).send({ message: "Machine already exists" });

    // Assuming you want to create one Info document with all the fields
    const info = new Info(req.body);
    await info.save();

    res.status(201).send({ message: "Machine created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
