import { Injectable } from "@nestjs/common";
import { Student } from "./data/student.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StudentService {
    //Create a empty Array to list the student 
    public students : Student[] = [];

    // add student
    addStudent(student : Student)  : string {
        // Id auto generate 
        student.id = uuidv4();
        this.students.push(student);
        return "Student has been added successfully";
    }

    //update student
    updateStudent(student : Student) : string {
        let index = this.students.findIndex((Currentstudent) => {
            return Currentstudent.id == student.id
        });
        this.students[index] = student;
        return "Student has been updated successfully";
    }
    // delete student
    deleteStudent(studentId : string) : string {
        this.students = this.students.filter((student) => {
            return student.id != studentId;
        });
        return "Book has been deleted Successfully";
    }
    // get student
    findAllStudents() : Student[] {
        return this.students;
    }
}