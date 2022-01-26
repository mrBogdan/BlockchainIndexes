import { Controller, Get, Param } from '@nestjs/common';
import { BlocksService } from './service';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {
  }

  /**
   * @param id {number|string}
   */
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.blocksService.getEthBlockById(id);
  }
}
