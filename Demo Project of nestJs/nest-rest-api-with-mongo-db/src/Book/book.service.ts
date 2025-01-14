import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book, BookDocument } from "./schema/Book";
import { Model } from "mongoose";
import { CreateBookDto } from "./data/CreateBookDto";

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel : Model<BookDocument>){

    }
    //add book
    createBook(createBookDto : CreateBookDto) : Promise<Book>{
        const model = new this.bookModel();
        model.title = createBookDto.title;
        model.author = createBookDto.author;
        model.published = createBookDto.published;
        return model.save();
    }
    //update book
    // delete book
    remove(id : string) {
        return this.bookModel.deleteOne({_id : id}).exec();
    }
    // findAll book
    findAll() : Promise<Book[]> {
        return this.bookModel.find().exec();
    }
    // find Book by Id
    findOne(id: string) : Promise<Book>{
        return this.bookModel.findById(id).exec();
    }
}