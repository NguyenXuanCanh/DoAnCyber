import Body from './components/body';
import HeaderComponent from './components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/scss/index.scss';
import { createBrowserHistory } from 'history'
import HomeTemplate from './Template/HomeTemplate';
import UserTemplate from './Template/UserTemplate';
import AdminTemplate from './Template/AdminTemplate';
import DetailMovie from './components/body/DetailMovie';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <div className="App">
          <Route path="/user" exact>
            <UserTemplate></UserTemplate>
          </Route>
          <Route path="/" exact component={HomeTemplate}></Route>
          <Route path="/home" exact component={HomeTemplate}></Route>
          <Route path="/admin" exact component={AdminTemplate}></Route>
          <Route path="/detailMovie/:id" exact component={DetailMovie}></Route>

        </div>
      </Switch>
    </Router>
  );
}

export default App;
