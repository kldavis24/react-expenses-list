import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import { useState } from 'react';
import './assets/Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
        
    );
};

export default Expenses;