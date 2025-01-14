import { PartialType } from "@nestjs/swagger";
import { CreateBlogDto } from "./blog.dto";

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}