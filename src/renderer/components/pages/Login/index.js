/* eslint-disable */
import { setlogin, setlogout } from '../../../state/loginSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LoginBackground, LoginContainer, LoginTitle, Background, CardContainer, CardLayout } from './Login.styled';

const Login = () => {
  const { login } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      setlogin({
        login: true,
        personalKey: '123456789',
      })
    );
  };

  return (
    <Background>
      <CardContainer>
        <CardLayout>
          <LoginBackground>
            <LoginTitle>Login!</LoginTitle>
          </LoginBackground>
          <LoginContainer>
            <TextField id="password" label="Password" variant="outlined" />
            <Button
              color="primary"
              size="large"
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </Button>
          </LoginContainer>
        </CardLayout>
      </CardContainer>
    </Background>
  );
};

export default Login;
