const express = require("express"),
      app = express(),
      path = require("path")

app.use(express.static("build"))

app.get("/", (req, res) => res.sendFile("build/index.html"))

app.listen(8000, () => console.log(`Listening on post ${8000}`));