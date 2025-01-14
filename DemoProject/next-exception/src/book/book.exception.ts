import { HttpException, HttpStatus } from "@nestjs/common";

//Create custom exception 
export class BookException extends HttpException {
    constructor(){
        super('This is my custom book exception', HttpStatus.BAD_REQUEST);
    }
}