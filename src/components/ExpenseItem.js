import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css'; // Import your custom CSS file for styling

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    const handleChangeCurrency = (cost) => {
        return `${currency}${cost}`;
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{handleChangeCurrency(props.cost)}</td>
            <td>
                <button className="custom-button" onClick={() => increaseAllocation(props.name)}>
                    <div className="plus-sign">+</div>
                </button>
            </td>
            <td>
                <button className="custom-button minus-sign" onClick={() => reduceAllocation(props.name)}>
                    <div>-</div>
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;
