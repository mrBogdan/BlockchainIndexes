import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GroupsService } from './service';

@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService) {}

    @Get()
    async getGroupIds(): Promise<any> {
        return this.groupsService.getGroupIds();
    }

    @Get('/:id')
    getGroupById(@Param('id', ParseIntPipe) id: number): Promise<any>  {
        return this.groupsService.getGroupById(id);
    }
}
