import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
// import ExpenseForm from "../NewExpense/ExpenseForm";
// import NewExpense from "../NewExpense/NewExpense";

const NewExpense = (props) => {

  //import React, { useState } from "react";

// const ShowForm = () =>{

    const [isShowing, setIsShowing] = useState(false)

    const showClick = () => {
        setIsShowing(true)
    }

    const stopShowing = () => {
      setIsShowing(false)
    }
//     }

//     let content 

//     if(!isShowing) {
//         content = <button onClick={showClick}>Add An Expense</button>
//     }
//     else {
//         content = <NewExpense/>
//     }

//     return (
//         <div>{content}</div>
//     )


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsShowing(false)
  };

  return (
    <div className='new-expense'>
      {!isShowing && <button onClick={showClick}>Add New Expense</button>}
      {isShowing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopShowing}/>}
    </div>
  );
};

export default NewExpense;