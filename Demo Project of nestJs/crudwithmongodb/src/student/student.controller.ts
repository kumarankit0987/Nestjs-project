import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Student } from "./data/student.dto";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
    // Create Constructor to intialize the Book Service
    constructor(private studentService : StudentService){

    }
    // add student
    @Post("/add")
    addStudent(@Body() student : Student) : string {
        return this.studentService.addStudent(student);
    }
    //update student
    @Put("/update")
    updateStudent(@Body() student : Student) : string {
        return this.studentService.updateStudent(student);
    }
    //delete student
    @Delete("/delete/:id")
    deleteStudent(@Param('id') studentId : string) : string {
        return this.studentService.deleteStudent(studentId);
    }
    // find student
    @Get("/findAll")
    findAllStudents() : Student[] {
         return this.studentService.findAllStudents();
    }

}