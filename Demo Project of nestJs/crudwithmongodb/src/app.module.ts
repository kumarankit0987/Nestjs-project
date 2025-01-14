import { Module } from '@nestjs/common';
import { studentModule } from './student/student.module';

@Module({
  imports: [studentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
