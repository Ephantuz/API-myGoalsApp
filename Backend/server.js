const express = require("express");

const authRoute = require("./routes/auth");
const goalsRoute = require("./routes/goals");

const PORT = 4000;
const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
res.render("home");
});

app.use("/auth", authRoute);
app.use("/goals", goalsRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
