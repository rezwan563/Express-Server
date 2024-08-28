import { Request, Response } from "express";
import studentService from "./student.service";

class StudentController {
  async createStudent(req: Request, res: Response) {
    try {
      const user = await studentService.createStudent(req.body);
      return res
        .status(201)
        .json({ message: "Student created successfully", user });
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: "Invalid input" });
      else return res.status(500).json({ message: "Unexpected error" });
      
    }

  }

  async getStudent(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (id) {
        const user = await studentService.getStudent(id);
        return res.status(200).json({ message: "User found", user });
      } else {
        const user = await studentService.getStudent();
        return res.status(200).json({ message: "Users list found", user });
      }
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: "Invalid input" });
      else return res.status(500).json({ message: "Unexpected error" });
    }
  }
}

export default new StudentController();
