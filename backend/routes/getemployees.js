const router = require("express").Router();
const { User } = require("../models/user");

router.get("/", async (req, res) => {
  try {
    // Query the database to retrieve all employee names
    const employees = await User.find({ role: "employee" }, "name");

    // Extract employee names from the query result
    const employeeNames = employees.map((employee) => employee.name);

    // Send the array of employee names as the response
    res.status(200).send(employeeNames);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
