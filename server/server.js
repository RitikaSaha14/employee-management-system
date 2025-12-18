const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const employeeRoutes = require("./routes/employeeRoutes");
app.use("/employees", employeeRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

