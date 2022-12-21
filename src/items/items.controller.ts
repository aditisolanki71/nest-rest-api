import { Controller,Body, Get, Post, Req, Res, Param, Put, Delete} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {

    }

    @Get()
    findAll(): Item[] {
        return this.itemService.findAll();
    }


    @Get(":id")
    // findOne(@Param() param) : string{
    //     return `item ${param.id}`
    // }
    findOne(@Param('id') id) : Item{
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDTO): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`; 
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return `Delete ${id}`
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDTO, @Param('id') id) : string {
        return `Update ${id} - Name: ${updateItemDto.name}`
    }

}
