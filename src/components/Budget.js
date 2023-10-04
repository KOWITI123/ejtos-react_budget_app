import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext); // Destructure dispatch from the context
    const [inputValue, setInputValue] = useState(budget);

    useEffect(() => {
        // Check the input value after it has been updated
        const parsedValue = parseFloat(inputValue);
        const upperLimit = 20000;

        if (!isNaN(parsedValue)) {
            if (parsedValue < 0 || parsedValue > upperLimit) {
                alert(`Budget must be between 0 and ${currency}${upperLimit}`);
            } else if (parsedValue < budget) {
                alert('You cannot reduce the budget value lower than the starting budget');
            }
        } else {
            // Allow empty input (no value)
            setInputValue("");
        }
    }, [inputValue, budget, currency, dispatch]); // Include dispatch in the dependency array

    const handleBudgetChange = (event) => {
        // Update the input value as the user types
        setInputValue(event.target.value);
    }

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;

        // Dispatch an action to update the currency
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

    return (
        <div className='alert alert-secondary'>
            <div className="budget-container">
                <span className="budget-label">Budget:</span>
                <span className="budget-amount">{currency}</span>
                <input type="number" step="10" min="0" value={inputValue} onChange={handleBudgetChange} />
            </div>
            <div className="currency-container">
                <label>Currency:</label>
                <select value={currency} onChange={handleCurrencyChange}>
                    <option value="" disabled>Select Currency</option>
                    <option value="$">Dollar</option>
                    <option value="£">Pound</option>
                    <option value="€">Euro</option>
                    <option value="₹">Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Budget;
