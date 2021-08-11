import { useState } from 'react';
import './assets/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // Execute the passed in onAddExpense function from App
        props.onAddExpense(expenseData);

        // Close the new expense form on submission
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {/* Pass a callable function (onSaveExpenseData) to the ExpenseForm component.
                Calling this function from ExpenseForm executes onSaveExpenseDataHandler here.*/}
            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseData={onSaveExpenseDataHandler} 
                    onCancel={stopEditingHandler} 
                />
            )}
        </div>
    );
};

export default NewExpense