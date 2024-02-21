
//raw data interface
export interface ITransaction {
    _id: string;
    description: string;
    accountId: string;
    _currency: string;
    _quantity: number;
    _transactionDate: Date;
}

export interface IAccount {
    _id: string;
    name: string;
    timezone: number;
    currency: number;
    transection: ITransaction[];
}