export interface IBudget {
    income: IIncome[],
    expenses: IExpense[],
    taxes: ITax[],
    taxDeductions: ITaxDeduction[],
    Transactions: Transaction[]

}

export type PAY_FREQUENCY = "Bi-Weekly" | "Weekly" | "Semi-Monthly" | "Monthly" | "Quarterly" | "Annually"
export type TAX_SOURCE = ""
export interface IIncome { 
    name: string,
    pay: number,
    payFrequency: PAY_FREQUENCY;
}

type EXPENSE_CATEGORY = "Rent" | "Groceries" | "Utilities"
export type BUDGET_EXPENSE_CATEGORY = EXPENSE_CATEGORY & string;

export interface IExpense {
    name: string;
    amount: number;
    day?: Date;
    category: BUDGET_EXPENSE_CATEGORY
}

export interface ITax {
    name: string | TAX_SOURCE;
    amount: number;
}

export interface ITaxDeduction { 
    name: string;
    amount: number;
}

export interface Transaction { 
    source: string,
    category: BUDGET_EXPENSE_CATEGORY
}