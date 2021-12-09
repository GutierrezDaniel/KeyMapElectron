/* eslint-disable */
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setlogin, setlogout } from '../../state/loginSlice';

const Login = () => {
  const { login } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setlogin({
      login: true,
      personalKey: '123456789',
    }));
  }
  const handleLogout = () => {
    dispatch(setlogout());
  }

  console.log({login});
  return (
    <div>
      <h1>Helowsiño</h1>
      <button
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
