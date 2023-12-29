const express = require("express")
const app = express()

let count = 0;

app.get("/", (req, res) => {
  count++;
  console.log(`부하 테스트 ${count}`)
  res.send("")
})

app.listen(3000, () => {
  console.log("server start 3000")
})