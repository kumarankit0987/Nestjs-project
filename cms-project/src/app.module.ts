import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : ['.env']
  }),
  MongooseModule.forRootAsync({
    imports : [ConfigModule],
    useFactory : (configSevice : ConfigService)=> ({uri : configSevice.get("MONGO_URI")}),
    inject : [ConfigService]
  })

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
