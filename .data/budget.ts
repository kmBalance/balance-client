import { IBudget } from "projects/budget/src/app/modules/core/types";

export var monthlyBudget: IBudget = {
    id: 0,
    amount: 0,
    budgetAmount: 0,
    budgetInterval: "MONTHLY",
    budgetType: "REGULAR",
    performance: "UNDER",
    budgetDate: new Date('2023-08-01')
};
