import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class BookGuard implements CanActivate{

    public key : string = "75785rhfrb4337rhfdu59fb";
    
    canActivate(context: ExecutionContext): boolean {
        console.log("this is the book guard");
        return false;
    }

}