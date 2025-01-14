import { BadRequestException, Controller, Get, UseFilters } from "@nestjs/common";
import { error } from "console";
import { BookException } from "./book.exception";
import { BookCustomException } from "./book.exception.filter";

@Controller('book')
export class BookController {

   
    @Get()
    @UseFilters(BookCustomException)
    getBook() : string {
        throw new BadRequestException();
        return "This is the book api";
    }



}