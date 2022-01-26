import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { ABI_JSON, CONTRACT_ADDRESS, PROVIDER_URL } from '../../config';

const w = new  Web3(PROVIDER_URL);
const contract = new w.eth.Contract(JSON.parse(ABI_JSON), CONTRACT_ADDRESS);

@Injectable()
export class EthClient {
  async getGroupIds() {
    return contract.methods.getGroupIds().call()
  }

  async getGroupById(id: number) {
    return contract.methods.getGroup(id).call();
  }

  async getIndexById(id: number) {
    return contract.methods.getIndex(id).call();
  }

  async getEthNetBlockById(id: string) {
    return w.eth.getBlock(id);
  }
}
