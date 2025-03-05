const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Your nodejs code is now Deployed!");
});

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
