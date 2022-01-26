import { Controller, Get, Param } from '@nestjs/common';
import { GroupsService } from './service';

@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService) {}

    @Get()
    async getGroupIds(): Promise<any> {
        return this.groupsService.getGroupIds();
    }

    @Get('/:groupId')
    getGroupById(@Param('groupId') groupId): Promise<any>  {
        return this.groupsService.getGroupById(groupId);
    }
}
