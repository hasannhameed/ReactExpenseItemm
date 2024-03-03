import ExpenseItem from './componenets/ExoenseItem.js';
import './App.css';


function App() {
  const expense = [
    {
      title: "NewsPaper",
      amount: 100.50,
      date: new Date(2024, 2, 26),
      expenditure: "Shops",
    },
    {
      title: "Books",
      amount: 75.20,
      date: new Date(2024, 3, 26),
      expenditure: "Stationary",
    },
    {
      title: "wifi",
      amount: 75.60,
      date: new Date(2024, 4, 26),
      expenditure: "airtelCompany",
    },
    {
      title: "Grocceries",
      amount: 80.60,
      date: new Date(2024, 5, 20),
      expenditure: "InstaMart",
    }
    // Add more objects as needed
  ];
  return (
    <>
      <div>
        <h2>lets get started</h2>
        <ExpenseItem
          title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
          expenditure={expense[0].expenditure}
        />
        <ExpenseItem
          title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
          expenditure={expense[1].expenditure}
        />
        <ExpenseItem
          title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
          expenditure={expense[2].expenditure}
        />
        <ExpenseItem
          title={expense[3].title}
          amount={expense[3].amount}
          date={expense[3].date}
          expenditure={expense[3].expenditure}
        />
      </div>
    </>
  );
}

export default App;
