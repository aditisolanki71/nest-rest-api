import { Controller,Body, Get, Post, Req, Res, Param, Put, Delete} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(":id")
    // findOne(@Param() param) : string{
    //     return `item ${param.id}`
    // }
    async findOne(@Param('id') id) : Promise<Item>{
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDTO): Promise<Item>{
        return this.itemService.create(createItemDto) 
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDTO, @Param('id') id) : Promise<Item> {
        return this.itemService.update(id,updateItemDto)
    }

}
