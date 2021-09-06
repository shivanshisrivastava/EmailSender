import Card from "../UI/Card";
import TransactionListItem from "./TransactionListItem";
const DUMMY = [{id : 'ID'},{id : 'ID'},{id : 'ID'},{id : 'ID'},{id : 'ID'},{id : 'ID'},{id : 'ID'},{id : 'ID'},{id : 'ID'}]
const TransactionList = (props) =>
{
    let transactionList = DUMMY.map(data => (
        <TransactionListItem key={data.id} listItem={data.id}/>
      ));
    
    return(<Card>
       <ul>
        {transactionList}
       </ul>
    </Card>);
}

export default TransactionList;