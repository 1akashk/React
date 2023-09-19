import './ExpenseItem.css';

function ExpenseItem(data){
    const month=data.date.toLocaleString('en-US',{ month:'long'});
    const day=data.date.toLocaleString('en-US',{ day:'2-digit'});
    const year=data.date.getFullYear();
   
    return (
        <div className='expense-item'>
            <div className='expense_date'>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{data.title}</h2>
                <div className='expense_item__price'>Rs:{data.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;