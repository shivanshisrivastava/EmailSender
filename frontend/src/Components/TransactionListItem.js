import classes from "../Components/TransactionListItem.module.css";
const TransactionListItem = (props) => {
   const initials = props.user.match(/\b(\w)/g).join(''); 
  return (
    <div className={classes.transactions}>
        <div className={classes.user}>{initials}</div>
        <div>
        <li>
      <h3>{props.listItem}</h3> 
    </li>
    <h6>{props.date}</h6>
        </div>
    <hr/>
    </div>
  );
};

export default TransactionListItem;
