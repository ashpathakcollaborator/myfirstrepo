import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"

function ExpenseItem(props) {
// function ExpenseItem({title, date, amount}) {

   // const expenseDate = new Date(2023, 1, 1);
   // const expenseTitle = 'Car Insurance';
   // const expenseAmount = 300.00;

   /***
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description"> 
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
  

    return (
        <div className="expense-item">
            <div>{props.expense.date.toISOString()}</div>
            <div className="expense-item__description"> 
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </div>
    );
    ***/
    
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description"> 
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );

}

export default ExpenseItem;