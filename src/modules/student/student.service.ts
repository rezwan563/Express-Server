import prisma from "../../../prisma/client";
import generateStudentFilter from "./generateStudentFilter";

class StudentService {
  async createStudent(data: any) {
    return prisma.student.create({ data });
  }

  async getStudent(id?: number, query?: any) {
    if (id) return prisma.student.findUnique({ where: { id } });
    else if (query) {
      const filter = generateStudentFilter(query);
      return prisma.student.findMany({ where: filter });
    } else {
      return prisma.student.findMany();
    }
  }

  async editStudent(id: number, data: any) {
    return prisma.student.update(data);
  }

  async deleteStudent(id: number) {
    return prisma.student.delete({ where: { id } });
  }

  async sortStudent(sortBy: { field: string; order: "asc" | "desc" }) {
    const validField = ["firstName", "lastName", "enrollmentDate"];
    if (!validField.includes(sortBy.field)) {
      throw new Error("Invalid sort field");
    }
    const order = sortBy.order || "asc";
    return prisma.student.findMany({
      orderBy: {
        [sortBy.field]: sortBy.order,
      },
    });
  }
}

export default new StudentService();
