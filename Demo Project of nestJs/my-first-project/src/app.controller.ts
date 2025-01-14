import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./app.service";

@Controller("book")
export class BookController {


    constructor(private bookService : BookService){}
    //add book
    @Post("/add")
    addBook() : string{
      return this.bookService.addBook();
    }
    
    //delete book
    @Delete("/delete")
    deleteBook() : string {
        return this.bookService.deleteBook();
    }

    //update book
    @Put("/update")
    updateBook() : string{
        return this.bookService.updateBook();
    }
    
    //Find all book
    @Get("/findAll")
    findAllBooks() : string{
      return  this.bookService.findAllBooks();
    }

    //Find single book by id
    // @Get('/findBookById/:bookId')
    // findBookById(@Param() params): string {
    //     console.log(params.id);
    //     return "This will find book of id  #${params.id}";
    // }

}