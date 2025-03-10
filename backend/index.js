const express = require("express");
const cors = require("cors");
const adminRoutes = require("./adminRoutes");
const frontendRoutes = require("./frontendRoutes");
const merchantRoutes = require("./merchantRoutes");

const app = express();
const PORT = 5009;

// Middleware
app.use(cors());
app.use(express.json());

// Use separate route files
app.use("/", adminRoutes);
app.use("/", frontendRoutes);
app.use("/", merchantRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
