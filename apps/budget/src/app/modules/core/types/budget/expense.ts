import { IResourcable } from ".."

export interface ICategory extends IResourcable{
     name: string,
    parentId: number,
    type: CATEGORY_TYPE,
    isCustom: boolean
}

export type CATEGORY_TYPE = 'EXPENSE' | 'INCOME' | 'TAX' | 'PRETAX'