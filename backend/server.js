    // import express from "express";
    // import dotenv from "dotenv";
    // const app = express();
    // dotenv.config();

    // const port = process.env.PORT || 5000;

    // app.get("/", (req, res) => {
    // res.send("Hello World!!!!");
    // });

    // app.listen(5000, () => console.log(`Server is running on port {PORT}`));


    const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
