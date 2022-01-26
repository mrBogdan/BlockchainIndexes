import { Module } from '@nestjs/common';
import { EthClient } from './EthClient';

@Module({
  providers: [EthClient],
  exports: [EthClient],
})
export class EthModule {}

