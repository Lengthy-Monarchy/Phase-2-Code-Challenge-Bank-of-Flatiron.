import React, { useState, useEffect } from 'react';
import TransactionTable from './Components/TransactionTable';
import TransactionForm from './Components/TransactionForm';
import TransactionSearch from './Components/TransactionSearch';

import './App.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
        // Fetch data from the local server
        fetch('http://localhost:3000/transactions')
            .then((response) => response.json())
            .then((data) => {
                setTransactions(data);
                setFilteredTransactions(data);
            });
    }, []);

    const addTransaction = (newTransaction) => {
        // Add the new transaction to the filtered list and the main transactions list
        setTransactions([...transactions, newTransaction]);
        setFilteredTransactions([...filteredTransactions, newTransaction]);
    };

    const filterTransactions = (searchTerm) => {
        // Filter transactions based on the search term
        const filtered = transactions.filter((transaction) =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTransactions(filtered);
    };

    return (
        <div>
            <header>
                <div className="header-left">
                    <h1>Bank of Flatiron</h1>
                    <h4>Your Trusted Banking Partner</h4>
                </div>
                <div className="header-right">
                    <TransactionSearch filterTransactions={filterTransactions} />
                </div>
            </header>
            <h2>Add New Transaction</h2>
            <TransactionForm addTransaction={addTransaction} />
            <h2>Bank Transactions</h2>
            <TransactionTable transactions={filteredTransactions} />
        </div>
    );
};

export default App;