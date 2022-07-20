import Api from "../Axios/Api";

const USER_API = "/users";

const register=async(user)=> { 
    return await Api.post('/auth/register',user);
    } 
    const login=async(user)=> { 
    return await Api.post("/auth/login", user);
    } 
    const logout=async()=> { 
    localStorage.removeItem("CC_Token");
    } 
    export const authService = {
    register,
    login,
    logout
    }