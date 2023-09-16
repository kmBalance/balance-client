import { IResourcable } from ".."

export interface IBudget extends IResourcable {
    amount: number,
    budgetAmount: number,
    budgetInterval: BUDGET_INTERVAL,
    budgetType: BUDGET_TYPE,
    performance: BUDGET_PERFORMANCE,
    budgetDate: Date
}

export interface IRegularBudget extends IBudget {
    budgetType: 'REGULAR'
}

/**
 * @interface
 * @property budgetType - type is always Accrual
 * @property totalAccruedAmmount - total amount accrued so far in budget
 * @propery totalBudgetAmmount - total amount budgeted for 
 */
export interface IAccrualBudget extends IBudget {
    budgetType: 'ACCRUAL'
    totalAccruedAmount: number,
    totalBudgetAmount: number,
    period: number
}

export type BUDGET_INTERVAL = 'MONTHLY' | 'QUARTERLY' | "ONE_TIME" 

export type BUDGET_TYPE = 'REGULAR' | 'ACCRUAL'

export type BUDGET_PERFORMANCE = 'UNDER' | 'OVER' | 'TARGET'