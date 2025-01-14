import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction , Request, Response} from "express";

// Class Based Middleware
@Injectable()
export class BookMiddleWare implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
       let protocol = req.protocol; // http or https
       let host = req.get("host");
       let url = req.originalUrl;
       let method = req.method;
       let date = new Date().toDateString();

       console.log(protocol + "://" + host + url + " " + method + " " + date)
       next();


    }

}