import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 999),
            text,
            amount: +amount
        }
        if (newTransaction.amount < 0 && e.currentTarget.id === "btnI") {
            newTransaction.amount = -amount;
        }
        if (newTransaction.amount > 0 && e.currentTarget.id === "btnE") {
            newTransaction.amount = -amount;
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>New Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction Title</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction Title" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min="0" />
                </div>
                <div className="btnDiv">
                    <button className="btn income" id="btnI" onClick={onSubmit}>Income</button>
                    <button className="btn expense" id="btnE" onClick={onSubmit}>Expense</button>
                </div>
            </form>
        </>
    )
}