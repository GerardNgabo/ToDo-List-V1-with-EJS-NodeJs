const express = require("express")
const bodyParser = require("body-parser")
var newItem = ["Buy Food", "Cook Food", "Eat Food"]
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  var today = new Date()
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-US", options)
  console.log(newItem)
  res.render('list', { kindOfDay: day, newListItem: newItem })
})

app.post("/", (req, res) => {
  newItem.push(req.body.newitem)
  res.redirect("/")
})

app.listen(3000, () => { console.log("Server started at port 3000"); })



