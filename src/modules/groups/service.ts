import { Injectable } from '@nestjs/common';
import { EthClient } from '../../third_party/ethClient/EthClient';

@Injectable()
export class GroupsService {
  constructor(private ethClient: EthClient) {
  }

  async getGroupIds() {
    return this.ethClient.getGroupIds();
  }

  async getGroupById(id: string) {
    return this.ethClient.getGroupById(id);
  }
}

