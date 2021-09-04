import classes from '../Components/Navigation.module.css';
const Navigation = () => {
    return (<nav className={classes.Nav}>
        <ul className={classes.NavList}>
            <li className={classes.NavListItem}>
                Login
            </li>
            <li className={classes.NavListItem}>
                Transactions
            </li>
            <li className={classes.NavListItem}>
                Send Emails
            </li>
            <li className={classes.NavUser}>
                Shivanshi Srivastava
            </li>
        </ul>
    </nav>);
}

export default Navigation;