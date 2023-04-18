require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4002;

// middleware
app.use(express.json());
app.use(cors((origin = ["http://localhost:3000", "https://web-production-11881.up.railway.app/"])));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server start at Port No :${PORT}`);
});
