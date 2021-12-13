import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';

import store from './state/store';
import './App.css';
import Login from './components/pages/Login';

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
