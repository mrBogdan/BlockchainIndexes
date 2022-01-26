import { Module } from '@nestjs/common';
import { IndexesController } from './controller';
import { IndexesService } from './service';
import { EthModule } from '../../third_party/ethClient/module';

@Module({
  imports: [EthModule],
  controllers: [IndexesController],
  providers: [IndexesService]
})
export class IndexesModule {}
