import classes from '../UI/Button.module.css';
const Button = (props) =>
{
    const submitHandler =() =>
    {
        console.log('Submit');
    }
    return(<button type="submit" onClick={submitHandler}>{props.children}</button>);
}

export default Button;