import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./schema/Book";
import { CreateBookDto } from "./data/CreateBookDto";

@Controller("book")
export class BookController {
    constructor(private readonly bookService : BookService){
        
    }

    @Get()
     findAll(){
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : string){
        return this.bookService.findOne(id);
    }

    @Post()
    create(@Body() CreateBookDto : CreateBookDto) {
        return this.bookService.createBook(CreateBookDto);
    }
}