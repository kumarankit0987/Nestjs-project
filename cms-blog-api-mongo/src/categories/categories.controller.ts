import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCategoryDto } from './categoryDto/category.dto';
import { UpdateCategoryDto } from './categoryDto/category.update.dto';
import { CategoriesService } from './categories.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {

    constructor(private readonly categoriesService : CategoriesService){

    }

    @Get()
    findAll() {
     return this.categoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
     return this.categoriesService.findOne(id);
    }

    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
     return this.categoriesService.create(createCategoryDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
     return this.categoriesService.update(id, updateCategoryDto);
    }
 
    @Delete(':id')
    remove(@Param('id') id: string) {
     return this.categoriesService.delete(id);
  }
}
