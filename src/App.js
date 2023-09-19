import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses=[
    { id:1, title:'Rent', amount:3000, date: new Date(2023, 9, 15)},
    { id:2, title:'Recharge', amount:250, date: new Date(2023, 9, 10)},
    { id:3, title:'Vegitables', amount:500, date: new Date(2023, 9, 11)},
    { id:4, title:'Dress', amount:5000, date: new Date(2023, 9, 1)},
    { id:5, title:'Shoe', amount:1000, date: new Date(2023, 9, 14)},
    { id:6, title:'Travel', amount:1500, date: new Date(2023, 9, 9)},
    { id:7, title:'Laptop', amount:30000, date: new Date(2023, 9, 8)},
    { id:8, title:'Headphone', amount:1500, date: new Date(2023, 9, 16)},
  ];


  return (
    <div>
    <h2>HELLO</h2>
     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
     <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}></ExpenseItem>
     <ExpenseItem title={expenses[5].title} amount={expenses[5].amount} date={expenses[5].date}></ExpenseItem>
     <ExpenseItem title={expenses[6].title} amount={expenses[6].amount} date={expenses[6].date}></ExpenseItem>
    </div>
  );
}

export default App;
