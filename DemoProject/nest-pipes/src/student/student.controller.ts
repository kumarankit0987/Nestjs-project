import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { StudentDto } from "./dto/student.dto";
import { StudentPipe } from "./pipes/student.pipe";

@Controller("student")
export class StudentController {

    // Implements ParseIntPipe in the function parameter . it's convert the string into number
    @Get("/:id")
    findStudentByID(@Param("id", ParseIntPipe) id : number) : string {
        console.log(id, typeof(id));
        return "book by id";
    }

    @Post("/add")
    createBook(@Body(new StudentPipe) book : StudentDto) : string {
        return "add book";
    }
}