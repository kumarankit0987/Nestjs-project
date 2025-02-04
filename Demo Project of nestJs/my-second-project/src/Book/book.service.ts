
import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books : Book[] = [];

    //add book
    addBookService(book : Book) : string {
        //id auto generate
        book.id = uuidv4();
        this.books.push(book);
        return "Book has been added successfully";
    }
    //update book
    updateBookService (book : Book) : string {
        let index = this.books.findIndex((currentBook)=>{
            return currentBook.id == book.id; 
        });
        this.books[index] = book;
        return "Book has been updated successfully";
    }
    //delete book
    deleteBookService(bookId : string) : string {
        this.books = this.books.filter((book)=> {
            return book.id == bookId;
        });
        return "Book has been deleted successfully";
    }

    //find all books

    findAllBooks() : Book[] {
        return this.books;
    }
}

function book(value: Book, index: number, array: Book[]): value is Book {
    throw new Error("Function not implemented.");
}
