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
    const query = req.query;
    let student;

    try {
      if (id) {
        student = await studentService.getStudent(id);
        return res.status(200).json({ message: "Student found", student });
      } else {
        student = await studentService.getStudent(undefined, query);
        if (Array.isArray(student) && student[0]) {
          return res
            .status(200)
            .json({ message: "Student list found", student });
        }
        return res.status(200).json({ message: "No student found" });
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

  async deleteStudent(req: Request, res: Response) {
    const id = Number(req.params.id);
    let result;
    try {
      result = await studentService.deleteStudent(id);
      return res.status(201).json({ message: "Student info deleted", result });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async sortStudent(req: Request, res: Response) {
    const field = req.query.field as string;
    let order = req.query.order as string;
    let result;
    if (order != "asc" && order != "desc") {
      order = "asc";
    }

    try {
      console.log(`Sorting student based on ${field} and order ${order}`);
      if (field && order) {
        result = await studentService.sortStudent({
          field,
          order: order as "asc" | "desc",
        });
        return res.status(200).json({
          message: `Sorted student by ${field} order ${order}`,
          result,
        });
      }
      return res
        .status(200)
        .json({ message: "Provide sortby field and sort order" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new StudentController();
