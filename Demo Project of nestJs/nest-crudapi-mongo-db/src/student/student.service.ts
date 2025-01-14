import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './schema/student';
import { Model } from 'mongoose';

//import { Query as ExpressQuery } from 'express-serve-static-core';

@Injectable()
export class StudentService {

  constructor(@InjectModel(Student.name) private studentModel : Model<StudentDocument>){

  }

  create(createStudentDto: CreateStudentDto) : Promise<Student> {
    const model = new this.studentModel();
    model.id = createStudentDto.id;
    model.name = createStudentDto.name;
    model.city = createStudentDto.city;
    return model.save();
  }

  findAll() : Promise<Student[]> {

    //console.log(query);
    return this.studentModel.find().exec();
  }

  findOne(id: string) {
    return this.studentModel.findById(id).exec();
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.updateOne({_id : id, },
       {id: updateStudentDto.id,
        name : updateStudentDto.name,
        author : updateStudentDto.city
       }).exec();
  }

  remove(id: string) {
    return this.studentModel.deleteOne({_id : id}).exec();
  }
}
