import express from 'express'
import morgan from 'morgan'

const app = express()
const port = 8080

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Jotto')
})

app.listen(port, () => {
  console.log(`Jotto server started at http://localhost:${port}`)
})
