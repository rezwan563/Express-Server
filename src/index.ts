import * as dotenv from 'dotenv'
import express, {Application, Request, Response} from "express";
import { PrismaClient } from "@prisma/client"

const PORT = 4000

dotenv.config()

const app: Application = express()

app
.route('/')
.get((req: Request, res: Response) => res.status(200).send("Hello world"))

app.listen(4000, ()=> console.info(`Server is on port ${PORT}`))
