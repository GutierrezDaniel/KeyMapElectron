/* eslint-disable */
import { setlogin, setlogout } from '../../state/loginSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const LoginTitle = styled.h1`
  color: var(--color-titles);
  font-size: 2rem;
`;
const LoginBackground = styled.div`
  background-color: var(--color-secondary);
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  margin: '5% 5% 5% 5%',
}

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
    <div className="background">
      <Container>
        <Card>
          <LoginBackground>
            <LoginTitle>Login!</LoginTitle>
          </LoginBackground>
          <Box
            sx={ButtonContainer}
          >
            <TextField
              id="password"
              label="Password"
              variant="outlined"
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5%',
              }}
            >
            <Button color='primary' size='large' variant='contained' onClick={handleLogin}>Login</Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
