import { Controller, Get, UseGuards , Request, Post} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';


// Steps of authorization
// 1- Issue the id cars jwt token => Import jwtModule in AuthModule

@Controller('app')
export class AppController {
 
  constructor(private readonly authService : AuthService) {
  }


  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    //Authentication complete
    //Next step authorize
    //id card jwt token
    return this.authService.generateToken(req.user);
  }

  @Get("/android-developer")
  @UseGuards(AuthGuard('jwt'))
  androidDeveloperData() : string {
    return "This is private data for android developer";
  }
}
