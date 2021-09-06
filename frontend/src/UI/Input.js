import classes from '../UI/Input.module.css';
const Input = (props) =>
{    console.log(props.type);
    return(<input placeholder={props.placeholder} type={props.type} required/>);
}

export default Input;