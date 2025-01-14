import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class StudentMiddleWare implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
       // throw new Error("Method not implemented.");
      let protocol = req.protocol; // 
      let host = req.get('host');
      let url = req.originalUrl;
      let method = req.method;
      let date = new Date().toDateString();

      console.log(protocol + '://' + host + url + ' ' + method + ' ' + date );

      next();
    }

}