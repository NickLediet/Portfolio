const express = require("express"),
      app = express(),
      path = require("path"),
      Email = require("email-templates"),
      bodyParser = require("body-parser"),
      nodemailer = require("nodemailer")

const port = process.env.PORT || 8080

console.log(propcess.CLEARDB_DATABASE_URL)

app.use(express.static(path.join(__dirname, "build")))
app.use(bodyParser.urlencoded({
  extended : true
}))
app.use(bodyParser.json())

app.get("/", (req, res) => res.sendFile("index.html"))

app.post("/email", (req, res) => {

  console.log(req.body)
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
    text: message
  }
  smtpTransport.sendMail(emailMessage)
  res.send({msg : "email sent!"})
})



app.listen(process.env.PORT || 8080, () => console.log(`Listening on post ${port}`));