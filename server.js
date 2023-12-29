const express = require("express")
const app = express()
app.use(express.json());

let checkCount = 0;

app.get("/", (req, res) => {
  checkCount++;
  console.log(checkCount)
  res.json({
    "id": "testId",
    "pw": "testPw"
  })
})

app.post("/auth/login", (req, res) => {
  console.log(req.body)
  res.send("")
})

app.listen(3000, () => {
  console.log("server start 3000")
})