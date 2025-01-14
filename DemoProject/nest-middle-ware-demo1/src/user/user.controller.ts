import { Controller, Get, Post } from "@nestjs/common";

@Controller('user')
export class UserController {

    //findAll User
    @Get() 
    findAllUsers() : string {
        return "This api will return all the users";
    }

    //add User
    @Post()
    addUser() : string {
        return "This api will return all the users";
    }
}