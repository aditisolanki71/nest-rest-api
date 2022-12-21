import { Injectable } from '@nestjs/common';
import { Item } from "./interfaces/item.interface"
@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "1",
            name: "item1",
            description: "item1 description",
            qty: 100
        },
        {
            id: "2",
            name: "item2",
            description: "item2 description",
            qty: 200
        }
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find((item) => item.id === id);
    }
}
