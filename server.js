const express = require("express"),
      app = express(),
      path = require("path"),
      Email = require("email-templates"),
      bodyParser = require("body-parser"),
      nodemailer = require("nodemailer"),
      mysql = require("mysql"),
      cors = require("cors")

const data = {
  tags: [],
  projects: [

  ]
}
const port = process.env.PORT || 8080

const connection =  mysql.createConnection("mysql://b654198d5dbfc8:7585cf2b@us-cdbr-iron-east-05.cleardb.net/heroku_73724b049f62465?reconnect=true")

connection.connect((err) => {
  if (err) throw err
  console.log("Connected!")
})

const getProjects = `
select *
	from projects p 
	join (
			select projects_id, group_concat(t.name) tags from projects_tags pt
			join tags t
            on pt.tags_id = t.id
    group by projects_id
		  ) a 
    on p.id = a.projects_id
`

app.use(cors())
app.use(express.static(path.join(__dirname, "build")))
app.use(bodyParser.urlencoded({
  extended : true
}))
app.use(bodyParser.json())

app.get("/projects", (req, res) => {
  connection.query(getProjects, (err, result) => {
    if (err) throw err
    console.log("Result: " + result)
    let tags = []
    const projects = result.map(el => ({
      id : el.id,
      title: el.title,
      tags: [...new Set(el.tags.split(","))],
      link : el.link,
      thumbnail_url: el.thumbnail_url,
      description : el.description
    }))
    projects.forEach(el => {
      tags = tags.concat(el.tags)
    })
    tags = new Set(tags)
    /**
     * Get Projects
     * split tags 
     * cast tags to map
     */
    res.json({
      projects , tags : [
        ...tags
      ]
    })
  })
})

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