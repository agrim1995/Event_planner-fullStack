const express = require("express");
const cors = require("cors");
const apiRouter = require("./routers");
const authRouter = require("./routers/AuthRouter")
const app = express();
const jwt = require("./config/JwtManager");
const path = require("path");
var corOption = {
  origin: "*",
};

//middlewares
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors(corOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Event Planner Server Running .... ");
});

app.use("/api", async (req, res, next) => {
  const result = await jwt.authenticateToken(req);
  if (result.status) next();
  else res.json(result);
});
app.use("/api", apiRouter);

app.use("/auth", authRouter);
const PORT = process.env.PORT || 7087;
// const PORT = process.env.PORT || 7000;

//server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
