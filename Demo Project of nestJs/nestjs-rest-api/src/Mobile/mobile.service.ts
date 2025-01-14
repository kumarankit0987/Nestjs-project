import { Body, Injectable } from "@nestjs/common";
import { Mobile } from "./data/Mobile.dto";

@Injectable()
export class MobileService {

    public mobiles : Mobile[] = [];
    //add Mobile
    addMobile(mobile : Mobile) : string {
       this.mobiles.push(mobile);
       return "Mobile has been added successfully"; 
    }
    //update Mobile
    updateMobile( mobile : Mobile) : string {
        let index = this.mobiles.findIndex((currentMobile) => {
            return currentMobile.id == mobile.id;
        });
        this.mobiles[index] = mobile;
        return "Mobile has been updated successfully";
    }
    //delete Mobile
    deleteMobile(mobile : Mobile) : string {
        this.mobiles = this.mobiles.filter((mobile) => {
            return mobile.id != mobile.id;
        });
        return "book deleted successfully";
    }
    //findAllMobiles
    findAllMobiles() : Mobile[] {
        return this.mobiles;
    }
    //findMobileById
}