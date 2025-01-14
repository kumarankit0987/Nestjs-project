import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('app')
export class AppController {
 
  @Get()
  @UseGuards(AuthGuard("local"))
  getHello(@Request()  req): string {
    return req.user;
  }
}


