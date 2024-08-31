import { Router } from "express";
import studentController from "./student.controller";

const studentRoute = Router();

// Define all student routes

studentRoute
  .route("/")
  .get(studentController.getStudent)
  .post(studentController.createStudent);

studentRoute.route("/sortstudent").get(studentController.sortStudent);

studentRoute
  .route("/:id")
  .get(studentController.getStudent)
  .put(studentController.editStudent)
  .delete(studentController.deleteStudent);

export default studentRoute;
