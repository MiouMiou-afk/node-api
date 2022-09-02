const express = require('express')
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')
const cookieParser = require('cookie-parser')

require('dotenv').config({ path: './config/.env' })
require('./config/db')
const { checkUser, requireAuth } = require('./middleware/auth.middleware')
const app = express()
const cors = require('cors')
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false
}
app.use(cors(corsOptions))

//middleware

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//jwt
app.get('*', checkUser)
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
})

//routes
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)

///server (dernier)
app.listen(process.env.PORT, () => {
  console.log(`Listenning on port ${process.env.PORT}`)
})
