const { createSlice } = require('@reduxjs/toolkit');

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: false,
    personalKey: '',
  },
  reducers: {
    setlogin(state, action) {
      state.login = action.payload.login;
      state.personalKey = action.payload.personalKey;
    },

    setlogout(state) {
      state.login = false;
      state.personalKey = '';
    },
  },
});

export const { setlogin, setlogout } = loginSlice.actions;

export default loginSlice.reducer;
