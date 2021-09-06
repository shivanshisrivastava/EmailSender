import './App.css';
import Navigation from './Components/Navigation';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import User from './pages/User';
import Transactions from './pages/Transactions';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Switch>
          <Route path='/' exact>

          </Route>
          <Route path='/Auth/:Type'>
            <Auth />
          </Route> 
          <Route  path='/User'>
            <User />
          </Route>
          <Route path='/Transactions'>
          <Transactions />
          </Route>
          <Route>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
