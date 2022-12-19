import { Controller,Body, Get, Post } from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return "Get all items";
    }

    @Post()
    create(@Body() createItemDto: CreateItemDTO): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`; 
    }
}
