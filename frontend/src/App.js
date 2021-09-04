import './App.css';
import Navigation from './Components/Navigation';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import User from './pages/User';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Switch>
          <Route path='/' exact>

          </Route>
          <Route path='/Auth'>
            <Auth />
          </Route> 
          <Route  path='/user'>
            <User />
          </Route>
          <Route>
          </Route>
          <Route>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
