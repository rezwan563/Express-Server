import express, { Application } from "express";
import studentRoute from "./modules/student/student.routes";


const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: '2mb'}))

app
.route('/')
.get((req, res) => res.status(200).send('Hello World'))

app.use((req, res, next) =>{
    console.log(`Request reached on ${req.path}`)
    next()
})
// Routes endpoint


app.use('/api/v1/student', studentRoute);


export default app;
