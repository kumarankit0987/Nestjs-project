import { Injectable } from "@nestjs/common";


@Injectable()
export class BookService {
    addBook() : string{
        return "This will add book";
    }

    deleteBook() : string {
        return "This is for deleting book";
    }

    updateBook() : string{
        return "this will update the book";
    }

    findAllBooks() : string{
        return "This will find all books";
    }

    //  findBookById(@Param() params): string {
    //         console.log(params.id);
    //         return "This will find book of id  #${params.id}";
    //     }
}