import { Module } from '@nestjs/common';
import { BlocksController } from './controller';
import { BlocksService } from './service';
import { EthModule } from '../../third_party/ethClient/module';

@Module({
  controllers: [BlocksController],
  providers: [BlocksService],
  imports: [EthModule]
})
export class BlocksModule {}
