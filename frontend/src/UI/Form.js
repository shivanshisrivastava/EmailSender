import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
const Form = (props) => {
  const type = props.type;
  console.log("Form", type);
  return (
    <Card>
      <form>
      {type === "SignUp" ? <h5>Signup Form</h5> : <h5>Login Form</h5>}
      {type === "SignUp" ? <Input placeholder="Name" type="text" /> : null}
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      {type === "SignUp" ? <Button>Signup</Button> : <Button>Login</Button>}
      {type === "SignUp" ? (
        <p>
          Already a member?{" "}
          <Link to="/:Login" replace={true}>
            Login instead.
          </Link>
        </p>
      ) : (
        <p>
          Not a member?{" "}
          <Link to="/:SignUp" replace>
            Signup insted.
          </Link>
        </p>
      )}
      </form>
    </Card>
  );
};

export default Form;
