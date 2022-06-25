import express from 'express'
import morgan from 'morgan'
import path from 'path'
import routes from './routes/index.js'

const app = express()
const port = process.env.PORT || 8080

app.use(morgan('tiny'))

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join('client', 'build')))
} else {
  app.get('/', (req, res) => {
    res.send(
      'Jotto! React app at: <a href="http://localhost:3000">http://localhost:3000</a>',
    )
  })
}

// Connect all routes
app.use(routes)

app.listen(port, () => {
  console.log(`Jotto server started at http://localhost:${port}`)
})
