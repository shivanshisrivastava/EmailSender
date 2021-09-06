import classes from '../UI/Button.module.css';
const Button = (props) =>
{
    return(<button className={props.style}>{props.children}</button>);
}

export default Button;