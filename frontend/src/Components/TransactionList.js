import Card from "../UI/Card";
import TransactionListItem from "./TransactionListItem";
import '../Components/TransactionList.module.css';
const DUMMY = [
  { user : 'Shivanshi Srivastava',
    title: "Transaction 1 : This mail will help you in your tasks, 3 tasks are assigned to you.",
    date : new Date().toDateString()
  },
  { user : 'Shivanshi Srivastava',
    title: "Transaction 2: This mail will help you in your tasks.",
    date : new Date().toDateString()
  },
  {  user : 'Rini Srivastava',
    title: "Transaction 3 : This mail will help you in your tasks.",
    date : new Date().toDateString()
  },
  {
    user : 'Rini Srivastava',
    title: "Transaction 4 : This mail will help you in your tasks, 3 tasks are assigned to you.",
    date : new Date().toDateString()
  },
  { user : 'Rini Srivastava',
    title: "Transaction 5 : This mail will help you in your tasks.",
    date : new Date().toDateString()
  },
];
const TransactionList = (props) => {
  return (
    <Card>
      <ul>
        {DUMMY.map((data, index) => (
          <TransactionListItem key={index} listItem={data.title} date={data.date} user={data.user} />
        ))}
      </ul>
    </Card>
  );
};

export default TransactionList;
