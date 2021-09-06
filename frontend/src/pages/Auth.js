import { useState } from 'react';
import { Route } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
const Auth = (props) =>
{
    const {signUp, setSignUp} = useState(true);

    
    return(<Card>
     {!signUp && <Button props={{backgroundColor:'white'}}>Login</Button>}
      <Button>Signup</Button>
      {signUp && <Input placeholder='Name'/>}
      <Input placeholder='Email'/>
      <Input placeholder='Password'/>
      <Button>Signup</Button>
      <p>Already a member? <a href='#'>Login insted.</a></p>
    </Card>);
}

export default Auth;