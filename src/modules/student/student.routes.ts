import { Router } from "express";
import studentController from "./student.controller";

const studentRoute = Router();

// Define all student routes


studentRoute
.route('/')
.get(() => studentController.getStudent)
.post(() => studentController.createStudent)

studentRoute
.route('/:id')
.put(() => console.log('Write put controller'))
.delete(() => console.log('Write delete controller'))


export default studentRoute;