import { NavLink } from 'react-router-dom';
import classes from '../Components/Navigation.module.css';
const Navigation = () => {
    return (<nav className={classes.Nav}>
        <ul className={classes.NavList}>
            <NavLink to="/auth/Login" activeClassName={classes.selected} className={classes.NavListItem}>
                Login
            </NavLink>
            <NavLink to="/Transactions" activeClassName={classes.selected} className={classes.NavListItem}>
                Transactions
            </NavLink>
            <NavLink to="/Email" activeClassName={classes.selected} className={classes.NavListItem}>
                Send Emails
            </NavLink>
            <NavLink to="/User" activeClassName={classes.selected} className={classes.NavUser}>
                Shivanshi Srivastava
            </NavLink>
        </ul>
    </nav>);
}

export default Navigation;