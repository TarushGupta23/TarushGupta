import express from "express"
import bodyParser from "body-parser";

const app = express()
const port = 3080

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/test", (req, res) => {
    res.render("testing.ejs")
})



app.listen(port)