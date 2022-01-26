import { Controller, Get, Param } from '@nestjs/common';
import { BlocksService } from './service';
import { BlockValidationPipe } from '../../pipes/block-validation.pipe';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {
  }

  @Get('/:id')
  async getById(@Param('id', new BlockValidationPipe()) id: string) {
    return this.blocksService.getEthBlockById(id);
  }
}
