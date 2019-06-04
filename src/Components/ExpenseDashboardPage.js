import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const ExpenseDashboard = () => (
    <div>
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboard;