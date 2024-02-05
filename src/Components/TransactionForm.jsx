import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
    const [transaction, setTransaction] = useState({
        date: '',
        description: '',
        category: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({ ...transaction, id: Date.now() }); // Adding an id for the new transaction
        setTransaction({ // Resetting the form fields after submitting
            date: '',
            description: '',
            category: '',
            amount: ''
        });
    };

    // Check if all fields are filled 
    const isFormComplete = Object.values(transaction).every(value => value.trim() !== '');

    return (
        // Added "transaction-form" className for styling
        <form className="transaction-form" onSubmit={handleSubmit}> 
            <input
                type="date"
                name="date"
                placeholder="Date"
                value={transaction.date}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="description"
                placeholder="Description"
                value={transaction.description}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="category"
                placeholder="Category"
                value={transaction.category}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={transaction.amount}
                onChange={handleChange}
                required
            />

            {}
            <button type="submit" disabled={!isFormComplete}>Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
