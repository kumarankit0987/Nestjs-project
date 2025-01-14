import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : [".env"]
  }),
  MongooseModule.forRootAsync({
    imports : [ConfigModule],
    useFactory : (configService : ConfigService)=> ({uri : configService.get("MONGO_URI")}),
    inject : [ConfigService]
  }),
  StudentModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
