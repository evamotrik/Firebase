import express from 'express';
import allRoutes from './src/routes/allRoutes.js'
import db from './src/db/db.js'
import bodyParser from 'body-parser'

const app = express()

const parser = express.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(parser)
app.use(urlencodedParser)
app.use('/', allRoutes)

const PORT = 3000

const server = app.listen(PORT, () => {
    db
    console.log(`Sever is running on port:  ${PORT}`)
})

