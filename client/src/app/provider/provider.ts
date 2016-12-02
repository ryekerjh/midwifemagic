export class Provider {
  
  constructor(
    public  name: string,
    public id: number,
    public providerGroup: string,
    public phone: string,
    public email: string,
    public address: string,
    public doctors: string[],
    public midwives: string[]
    ){ }
}