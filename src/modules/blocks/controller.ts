import { Controller, Get, Param } from '@nestjs/common';
import { BlocksService } from './service';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.blocksService.getEthBlockById(id);
  }
}
