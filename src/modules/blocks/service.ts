import { Injectable } from '@nestjs/common';
import { EthClient } from '../../third_party/ethClient/EthClient';

@Injectable()
export class BlocksService {
  constructor(private ethClient: EthClient) {}

  async getEthBlockById(id: string) {
    return this.ethClient.getEthNetBlockById(id);
  }
}
