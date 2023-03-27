const app = require("./app");

const mongoose = require("mongoose");

const { DB_HOST, PORT } = require("./config");

mongoose.set("strictQuery", true);

const start = async () => {
  try {
    if (!DB_HOST) {
      throw new Error("DB_HOST not set!");
    }

    await mongoose.connect(DB_HOST);
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1);
  }
};
start();
