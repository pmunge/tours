const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const adventureRoutes = require("./routes/adventureRoutes");

const app = express();
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json()); // Body parser middleware

app.use("/api", adventureRoutes); // Adventure routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

