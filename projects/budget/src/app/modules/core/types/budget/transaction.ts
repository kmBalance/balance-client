import { IResourcable } from "..";
import { ICategory } from "./expense";

export interface ITransaction extends IResourcable {
 
    transactionDate: Date,
    description: string,
    category: ICategory,
    notes: string,
    type: 'CASH' | 'CHECK' | 'PENDING',
    tags: string[]


}