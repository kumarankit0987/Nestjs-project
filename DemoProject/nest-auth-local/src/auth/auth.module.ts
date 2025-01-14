import { Module } from "@nestjs/common";
import { PassportLocalStrategy } from "./passport.local.strategy";
import { UserModule } from "src/Users/user.module";

@Module({
    imports : [UserModule],
    controllers :[],
    providers : [PassportLocalStrategy]
})
export class AuthModule {

}