import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { PassportLocalStrategy } from "./passport.local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";

//Import JWT Module for authentication
@Module({
  imports: [PassportModule,UserModule,
    JwtModule.register({
        secret : "key",
        signOptions : {
            expiresIn : "60s"
        }
  })],
  controllers: [],
  providers: [PassportLocalStrategy, AuthService, JwtStrategy],
  exports : [AuthService]
})
export class AuthModule {

}