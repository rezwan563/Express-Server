import { Router } from "express";

const studentRoute = Router();

// Define all student routes


studentRoute
.route('/')
.get(() => console.log('Write get controller'))
.post(() => console.log('Write post controller'))

studentRoute
.route('/:id')
.put(() => console.log('Write put controller'))
.delete(() => console.log('Write delete controller'))