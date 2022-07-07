import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {authService} from "../services/authService";
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
    localStorage.setItem("CC_Token", 
    JSON.stringify(res.data.accessToken));
    console.log(localStorage.getItem("CC_Token"))
    return res.data.user ;
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
    user:null,
    isLoading: false,
    isLoggedIn:false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    },
    reducers: {
        // Reducer comes here
        reset:(state)=>{
        state.isLoading=false
        state.isSuccess=false
        state.isError=false
        state.errorMessage=""
        }
        },
        extraReducers: {
        //insertion user
        [register.pending]: (state, action) => {
        state.isLoading=true;
        state.status=null;
        },
        [register.fulfilled]: (state, action) => {
        state.user=action.payload;
        state.isLoading=false;
        state.status=null;
        state.isSuccess=true
        },
        [register.rejected]: (state, action) => {
        state.isLoading=false;
        state.isError=true
        state.status=action.payload;
        state.user=null
        },
        [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        },
        },
        })
        export const {reset} =authSlice.actions
        export default authSlice.reducer;
        