const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

const DataBase = require("./config/Config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000);
