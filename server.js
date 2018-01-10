const express = require("express"),
      app = express(),
      path = require("path"),
      Email = require("email-templates"),
      bodyParser = require("body-parser"),
      nodemailer = require("nodemailer")

const port = process.env.PORT || 8080

app.use(express.static("build"))
app.use(bodyParser.urlencoded({
  extended : true
}))
app.use(bodyParser.json())

app.get("/", (req, res) => res.sendFile("build/index.html"))

app.post("/email", (req, res) => {
  const { email, name, message } = req.body

  console.log(name)

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host : "smtp.gmail.com",
    auth: {
      user: "ledietn",/* TODO:  move this to an enviroment file */
      pass: "Kilo5000!"
    }
  })

  const emailMessage = {
    to : "nicklediet@gmail.com",
    from : email,
    subject: `New Email from ${name}`,
    text: message,
    textHtml 
  }
  smtpTransport.sendMail(emailMessage)
  res.send({msg : "email sent!"})
})



app.listen(port, () => console.log(`Listening on post ${port}`));