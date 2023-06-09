import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connectl.js'
import bodyParser from 'body-parser'

const app = express()

//LOAD STATIC FILES
app.use (express.static('public'))

//SETUP MIDDLEWARE BEFORE ROUTES
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//LOAD ROUTES INTO MAIN FILE
app.use('/', routes)

//DEFINE PORT
const PORT = process.env.PORT || 5000

const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to database...')
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}
init()