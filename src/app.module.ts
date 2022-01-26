import { Module } from '@nestjs/common';
import { GroupsModule } from './modules/groups/module';
import { IndexesModule } from './modules/indexes/module';
import { BlocksModule } from './modules/blocks/module';

@Module({
  imports: [
    GroupsModule,
    IndexesModule,
    BlocksModule,
  ]
})
export class AppModule {}
