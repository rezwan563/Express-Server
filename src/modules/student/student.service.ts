import prisma from "../../../prisma/client";
import enablePagination from "./enablePagination";
import generateStudentFilter from "./generateStudentFilter";

class StudentService {
  async createStudent(data: any) {
    return prisma.student.create({ data });
  }

  async getStudent(id?: number, query?: any) {
    if (id) return prisma.student.findUnique({ where: { id } });
    else if (query) {
      const filter = generateStudentFilter(query);
      const { page, dataPerPage, skip, take } = enablePagination(query);
      const student = await prisma.student.findMany({
        where: filter,
        skip,
        take,
      });
      const totalStudents = await prisma.student.count({
        where: filter,
      });
      return {
        student,
        totalStudents,
        currentPage: page,
        totalPages: Math.ceil(totalStudents / dataPerPage),
      };
    } else {
      console.log("seraching for students");
      return prisma.student.findMany();
    }
  }

  async editStudent(id: number, data: any) {
    return prisma.student.update({ where: { id }, data });
  }

  async deleteStudent(id: number) {
    return prisma.student.delete({ where: { id } });
  }

  async sortStudent(sortBy: { field: string; order: "asc" | "desc" }) {
    const validField = ["firstName", "lastName", "enrollmentDate"];
    if (!validField.includes(sortBy.field)) {
      throw new Error("Invalid sort field");
    }
    if (sortBy.field && sortBy.order) {
      return prisma.student.findMany({
        orderBy: {
          [sortBy.field]: sortBy.order,
        },
      });
    }
  }
}

export default new StudentService();
