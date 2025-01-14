import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './Book/book.module';

@Module({
  imports: [BookModule,
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath : [".env"]
    }),
    MongooseModule.forRootAsync({
      imports : [ConfigModule],
      useFactory : (configService : ConfigService)=> ({uri : configService.get("MONGO_URI")}),
      inject : [ConfigService]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
