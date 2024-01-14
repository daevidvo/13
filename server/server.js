const express = require("express");
const path = require("path");
const io = require('socket.io');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

