import { Request, Response } from "express";
import studentService from "./student.service";

class StudentController {
  async createStudent(req: Request, res: Response) {
    try {
      const student = await studentService.createStudent(req.body);
      return res
        .status(201)
        .json({ message: "Student created successfully", student });
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: "Invalid input" });
      else return res.status(500).json({ message: "Unexpected error" });
    }
  }

  async getStudent(req: Request, res: Response) {
    const id = Number(req.params.id);
    const query = req.query as any;
    let student;

    try {
      if (id) {
        student = await studentService.getStudent(id);
        return res.status(200).json({ message: "Student found", student });
      } else {
        student = await studentService.getStudent(undefined, query);
        return res.status(200).json({ message: "Student list found", student });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async editStudent(req: Request, res: Response) {
    const id = Number(req.params.id);
    const body = req.body;
    let student;
    try {
      student = await studentService.editStudent(id, body);
      return res.status(201).json({ message: "Student info updated", student });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new StudentController();
