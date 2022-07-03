import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { livreService } from '../services/livres';

//add livre
export const addLivre = createAsyncThunk(
    "livre/addLivre",
    async(livre, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await livreService.addLivre(livre);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
// get livres
export const getLivres = createAsyncThunk(
    "livre/getLivres",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;

        try {
            const res = await livreService.getLivres();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//get one livre
export const getLivreByID = createAsyncThunk(
    "livre/getLivreByID",
    async (livreID, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await livreService.getLivreByID(livreID);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

);

//delete livre
export const deleteLivre = createAsyncThunk(
    "livre/deleteLivre",
    async (livreID, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await livreService.deleteLivre(livreID);
            return livreID;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//update livre
export const updateLivre = createAsyncThunk(
    "livre/updateLivre",
    async (livre, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await livreService.updateLivre(livre);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)








export const livreSlice = createSlice({
  name: 'livre',
  initialState: {
    livres: [],
    livre: {},
    isLoading: false,
    success: null,
    error: null
  },
  reducers : {
    removeSelectedLivre: (state) => {
        state.success = null
        state.error = null
    }
  },
  extraReducers: {
    //get livres
    [getLivres.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [getLivres.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.livres = action.payload;
    },
    [getLivres.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
        console.log("impossible de se connecter au serveur")
    },
    //get livre by ID
    [getLivreByID.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [getLivreByID.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.livre = action.payload;
    },
    [getLivreByID.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
        console.log("Pas de livres")
    },
    //add Livre
    [addLivre.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [addLivre.fulfilled]:(state, action) => {
        state.livres.push(action.payload);
        state.isLoading = false;
        state.success = action.payload;
    },
    [addLivre.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
    },
    // update Livre
    [updateLivre.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [updateLivre.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.livres = state.livres.map(item => item._id === action.payload._id ? action.payload : item)
    },
    [updateLivre.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
    },
    // delete livre
    [deleteLivre.pending]: (state, action) => {
        state.isLoading=true;
        state.status=null; 
    },
    [deleteLivre.fulfilled]: (state, action) => {
        state.isLoading=false;
        state.status=action.payload; 
        state.livres=state.livres.filter((item)=>
        item._id!==action.payload)
    },
    [deleteLivre.rejected]: (state, action) => {
        state.isLoading=false;
        state.status=action.payload; 
    },

  }
})
export const {removeSelectedLivre} = livreSlice.actions;
export default livreSlice.reducer