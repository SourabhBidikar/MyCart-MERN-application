require('dotenv').config() //give access to .env file
const express= require(`express`)
const connectDB = require(`./config/db`)

connectDB();
const app = express()
const PORT = process.env.port||5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => console.log(`server listening on port ${PORT}`))