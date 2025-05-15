import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connection } from "./postgres/postgres.js";
import router from "./routes/index.js";


// Load environment variables from .env file
dotenv.config(".env");

const app = express();
const port = process.env.PORT || 4432;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.use("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", router);

// Start server
app.listen(port, async () => {
  try {
    // Initialize database connection
    const connected = await connection();
    if (connected) {
      console.log("Database connection established successfully");
    } else {
      console.log("Warning: Server running but database connection failed");
    }
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error("Server startup error:", error);
  }
});

export default app;
