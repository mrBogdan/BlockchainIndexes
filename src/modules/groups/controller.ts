import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GroupsService } from './service';

@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService) {}

    @Get()
    async getGroupIds(): Promise<any> {
        return this.groupsService.getGroupIds();
    }

    /**
     * @param id {number}
     */
    @Get('/:groupId')
    getGroupById(@Param('groupId', ParseIntPipe) id): Promise<any>  {
        return this.groupsService.getGroupById(id);
    }
}
