import { Controller,Body, Get, Post, Req, Res, Param, Put, Delete} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { Request, Response } from 'express';
@Controller('items')
export class ItemsController {
    @Get()
    findAll(@Req() req: Request, @Res() res: Response): Response {
        console.log(req.url);
        return res.send("Hello World!!!");
    }


    @Get(":id")
    findOne(@Param() param) : string{
        return `item ${param.id}`
    }
    // findOne(@Param('id') id) : string{
    //     return `item ${id}`
    // }

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
