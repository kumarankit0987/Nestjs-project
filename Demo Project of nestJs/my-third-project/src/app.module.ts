import { Module } from '@nestjs/common';
import { EmployeeModule , } from './Employee/employee.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
//import { ConfigModule } from '@nestjs/config';
//import { MongooseModule } from '@nestjs/mongoose';
//import { MongooseModule } from '@nestjs/mongoose';
//import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath : ['.env']
    }),
    MongooseModule.forRootAsync({
      imports : [ConfigModule],
      useFactory : (ConfigService : ConfigService)=> ({uri : ConfigService.get("MONGO_URI")}),
      inject : [ConfigService]
    }),
    EmployeeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
// , MongooseModule.forRoot("mongodb://localhost/employees")

// , ConfigModule.forRoot({
//   isGlobal : true,
//   envFilePath : [".local.env"]
// }),
// MongooseModule.forRootAsync({
//   imports : [ConfigModule],
//   useFactory : (ConfigService : ConfigService)=> ({uri : ConfigService.get("MONGO_URI") }),
//   inject : [ConfigService]
// })
