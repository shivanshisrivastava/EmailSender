import classes from '../Components/TransactionListItem.module.css';
const TransactionListItem = (props) =>
{
    return(
        <li>{props.listItem}</li>
       );
}

export default TransactionListItem;