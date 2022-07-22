import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/authService";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res= await authService.register(user);
    return res.data
  }
  catch (error) {
    return rejectWithValue(error.message);
  }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const res = await authService.login(user); 
       return res.data ;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(message);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isLoggedIn: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
    reset:(state)=>{
      state.isSuccess=false
      state.isError=false
      
    }
  },
  extraReducers: {
    //insertion user
    [register.pending]: (state, action) => {
      state.isLoading = true;
      state.status = null;
      state.isSuccess = true;
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.status = null;
      state.isSuccess = true;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.status = action.payload;
      state.user = null;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.user = null;
      state.isSuccess = false;
      state.isError = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.isSuccess = true;
      state.isError = false;
      localStorage.setItem("access_token", JSON.stringify(action.payload.token));
      MySwal.fire({
        icon: 'success',
        title: `Welcome ${state.user.username}`,
        })
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;

    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isSuccess = false;
    },
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
