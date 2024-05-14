const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const infoSchema = new mongoose.Schema({
  Machinenumber: { type: Number, required: true },
  Employee: { type: String, required: true },
  Place: { type: String, required: true },
});

infoSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const Info = mongoose.model("Info", infoSchema);

const validate = (data) => {
  const schema = Joi.object({
    Machinenumber: Joi.number().required().label("Machinenumber"),
    Employee: Joi.string().required().label("Employee"),
    Place: Joi.string().required().label("Place"),
  });
  return schema.validate(data);
};

module.exports = { Info, validate };
