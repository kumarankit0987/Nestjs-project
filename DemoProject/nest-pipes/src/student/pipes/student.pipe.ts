import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class StudentPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.id==1) return value
        else throw new BadRequestException('Validation failed');
        return value.id == 1;
        //throw new Error("Method not implemented.");
    }

}