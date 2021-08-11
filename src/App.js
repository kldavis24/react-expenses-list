import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    { id: 1, title: 'Car Insurance', amount: 294.67, date: new Date() },
    { id: 2, title: 'Toilet Paper', amount: 94.12, date: new Date() },
    { id: 3, title: 'New TV', amount: 799.49, date: new Date() },
    { id: 4, title: 'Rent', amount: 1800.00, date: new Date() },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
