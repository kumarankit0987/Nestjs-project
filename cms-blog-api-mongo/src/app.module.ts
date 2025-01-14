import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [BlogsModule, CategoriesModule,
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath : [".env"]
    }),
    MongooseModule.forRootAsync({
      imports : [ConfigModule],
      useFactory : (configService : ConfigService)=>({uri : configService.get("MONGO_URI")}),
      inject : [ConfigService]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
