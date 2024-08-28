import prisma from '../../../prisma/client';

class StudentService {
    async createStudent(data: any){
        return prisma.student.create({data})
    }

    async getStudent(id?: number){
        if(id)
            return prisma.student.findUnique({where: { id }})
        else
            return prisma.student.findMany();
    }

    async editStudent(data: any){
        return prisma.student.update(data);
    }

    async deleteStudent(id: number){
        return prisma.student.delete({where: { id }})
    }
}

export default new StudentService();