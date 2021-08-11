import { useState } from 'react';
import './assets/ExpenseForm.css';

const ExpenseForm = (props) => {
    // Define multiple states for our form values
    const [enteredTitle, setEnteredTitle] = useState(String);
    const [enteredAmount, setEnteredAmount] = useState(String);
    const [enteredDate, setEnteredDate] = useState(String);

    // Update the state values based on the user inputs
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // Function to be executed when the form is submitted
    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        // Execute the passed in onSaveExpenseData function from NewExpense
        props.onSaveExpenseData(expenseData);

        // Reset our state values
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        value={enteredAmount} 
                        min='0.01' 
                        step='0.01' 
                        onChange={amountChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        value={enteredDate} 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;