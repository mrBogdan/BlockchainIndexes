import { Module } from '@nestjs/common';
import { GroupsController } from './controller';
import { GroupsService } from './service';
import { EthModule } from '../../third_party/ethClient/module';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService],
  imports: [EthModule]
})
export class GroupsModule {}
