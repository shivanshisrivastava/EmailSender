import { Link,Route } from 'react-router-dom';
import Card from '../UI/Card';
import classes from './UserComponent.module.css';
const UserComponent = (props) =>
{
    return(<Card>
        <div className={classes.div}>
        <h2>Name: </h2>
        <h3> Shivanshi Srivastava</h3>
        </div>
        <br/>
        <div className={classes.div}>
        <h2>Total Transactions: </h2>
        <h3>5 </h3>
         </div>
         <br/>
        <Link to='/Transactions'>View Transactions</Link>
      </Card>);
}

export default UserComponent;