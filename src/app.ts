import express, { Application } from "express";


const app: Application = express()

app.use(express.json())

app
.route('/')
.get((req, res) => res.status(200).send('Hello World'))


// Routes endpoint


export default app;
