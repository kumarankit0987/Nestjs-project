import { Controller, Get, Post } from "@nestjs/common";

@Controller('book')
export class BookController {

    @Get()
    findAllBooks() : string {
        return "This api will return all book";
    }

    @Post()
    addBook() : string {
        return "This api will add book";
    }
}