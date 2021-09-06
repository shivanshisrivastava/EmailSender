import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from '../UI/Form';
const Auth = (props) =>
{ const queryString = window.location.pathname;
  const type = queryString.split('/')[2];
  console.log(type);
    return(<div>
          <Form type={type}/>
    </div>);
}

export default Auth;