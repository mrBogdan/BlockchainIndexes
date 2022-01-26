import { Injectable } from '@nestjs/common';
import { EthClient } from '../../third_party/ethClient/EthClient';

@Injectable()
export class IndexesService {
  constructor(private ethClient: EthClient) {}

  async getIndexById(id: string) {
    return this.ethClient.getIndexById(id);
  }
}
