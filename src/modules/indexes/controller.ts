import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { IndexesService } from './service';

@Controller('indexes')
export class IndexesController {
  constructor(private indexesService: IndexesService) {}

  @Get('/:id')
  async getIndexById(@Param('id', ParseIntPipe) id: number) {
    return this.indexesService.getIndexById(id);
  }
}
