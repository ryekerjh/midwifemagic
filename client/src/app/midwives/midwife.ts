import { Provider } from '../provider/provider';

export class Midwife {
    constructor(
    public _id: number,
    public name: string,
    public certification: string,
    public insurance: boolean,
    public phone: number,
    public email: string,
    public providers: Array<Provider>,
    public RandomWidth: number
    ) { }
}