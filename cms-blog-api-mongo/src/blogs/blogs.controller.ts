import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateBlogDto } from './blogDto/blog.dto';
import { UpdateBlogDto } from './blogDto/blog.update.dto';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {

    constructor(private readonly blogsService: BlogsService){

    }


    @Get()
    findAll() {
    return this.blogsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
    return this.blogsService.findOne(id);
    }

    @Post()
    create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(id, updateBlogDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.blogsService.delete(id);
    }
}
