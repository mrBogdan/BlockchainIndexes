import { Controller, Get, Param } from '@nestjs/common';
import { IndexesService } from './service';

@Controller('indexes')
export class IndexesController {
  constructor(private indexesService: IndexesService) {}

  /**
   * @param id {number}
   */
  @Get('/:id')
  async getIndexById(@Param('id') id) {
    return this.indexesService.getIndexById(id);
  }
}
