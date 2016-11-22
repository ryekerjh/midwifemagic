import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let midwives = [
    { id: 2, name: 'Jenny TerribleMidWife'},
    { id: 3, name: 'Serena Schmoe'},
    { id: 4, name: 'Regina Magiclandia'},
    { id: 5, name: 'Detra Regi'},
    { id: 6, name: 'Hannah Cossack'}
    ];
    return {midwives};
  }
}