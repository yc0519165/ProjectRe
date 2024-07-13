import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
  const { deleteTransction } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}<span>{sign}${Math.abs(transaction.amount)}<button
      onClick={() => deleteTransction(transaction.id)} className="delete-btn">X</button></span> 
      </li>
  
  )
}

export default Transaction
