import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { MobileService } from "./mobile.service";
import { Mobile } from "./data/Mobile.dto";

@Controller("mobile")
export class MobileController {

    constructor(private mobileService : MobileService){
        
    }
    // add book
    @Post("/add")
    addBook(mobile : Mobile) : string {
        return this.mobileService.addMobile(mobile);
    }
    // get book
    @Get("/findAll")
    findAllMobiles() : string {
        return this.findAllMobiles();
    }
    //update book
    @Put("/update")
    updateMobile(@Body() mobile : Mobile) : string {
        this.mobileService.updateMobile(mobile);
        return "Mobile has been updated successfully";
    }
    //delete book
    @Delete("/delete")
    deleteMobile(mobile : Mobile) : string {
        return this.mobileService.deleteMobile(mobile);
    }
}