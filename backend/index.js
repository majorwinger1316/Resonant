require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const infoRoutes = require("./routes/info");
const getinfoRoutes = require("./routes/getinfo");
const getemployees = require("./routes/getemployees");
const employeedash = require("./routes/employeedash");

connection();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/info", infoRoutes);
app.use("/api/getinfo", getinfoRoutes);
app.use("/api/getemployee", getemployees);
app.use("/api/employeedash", employeedash);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
