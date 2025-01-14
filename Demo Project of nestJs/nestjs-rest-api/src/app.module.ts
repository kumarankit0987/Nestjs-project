import { Module } from '@nestjs/common';
import { MobileModule } from './Mobile/mobile.module';
import { MobileController } from './Mobile/mobile.controller';
import { MobileService } from './Mobile/mobile.service';


@Module({
  imports: [MobileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
