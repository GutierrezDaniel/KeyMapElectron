import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import { Provider } from 'react-redux';
import store from './state/store';
import './App.css';
import Login from './components/pages/Login';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}
