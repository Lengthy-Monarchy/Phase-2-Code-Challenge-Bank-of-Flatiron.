import React from 'react';

const TransactionSearch = ({ filterTransactions }) => {
    return (
        <input
        type="text"
        placeholder="Search transactions..."
        onChange={(e) => filterTransactions(e.target.value)}
    />
);
};

export default TransactionSearch;