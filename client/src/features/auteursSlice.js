import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auteurService } from '../services/auteurs';

//add Auteur
export const addAuteur = createAsyncThunk(
    "auteur/addAuteur",
    async(auteur, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await auteurService.addAuteur(auteur);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
// get Auteurs
export const getAuteurs = createAsyncThunk(
    "auteur/getAuteurs",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;

        try {
            const res = await auteurService.getAuteurs();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//get one Auteur
export const getAuteurByID = createAsyncThunk(
    "auteur/getAuteurByID",
    async (auteurID, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await auteurService.getAuteurByID(auteurID);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

);

//delete Auteur
export const deleteAuteur = createAsyncThunk(
    "auteur/deleteAuteur",
    async (auteurID, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await auteurService.deleteAuteur(auteurID);
            return auteurID;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//update Auteur
export const updateAuteur = createAsyncThunk(
    "auteur/updateAuteur",
    async (auteur, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await auteurService.updateAuteur(auteur);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)








export const auteurSlice = createSlice({
  name: 'auteur',
  initialState: {
    authors: [],
    author: {},
    isLoading: false,
    success: null,
    error: null
  },
  reducers : {
    removeSelectedAuteur: (state) => {
        state.success = null
        state.error = null
        
    }
  },
  extraReducers: {
    //get authors
    [getAuteurs.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [getAuteurs.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.authors = action.payload;
    },
    [getAuteurs.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
        console.log("impossible de se connecter au serveur")
    },
    //get Auteur by ID
    [getAuteurByID.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [getAuteurByID.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.author = action.payload;
    },
    [getAuteurByID.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
        console.log("Pas d'auteurs")
    },
    //add Auteur
    [addAuteur.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [addAuteur.fulfilled]:(state, action) => {
        state.authors.push(action.payload);
        state.isLoading = false;
        state.success = action.payload;
    },
    [addAuteur.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
    },
    // update Auteur
    [updateAuteur.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [updateAuteur.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.authors = state.authors.map(item => item._id === action.payload._id ? action.payload : item)
    },
    [updateAuteur.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
    },
    // delete Auteur
    [deleteAuteur.pending]: (state, action) => {
        state.isLoading=true;
        state.status=null; 
    },
    [deleteAuteur.fulfilled]: (state, action) => {
        state.isLoading=false;
        state.status=action.payload; 
        state.authors=state.authors.filter((item)=>
        item._id!==action.payload)
    },
    [deleteAuteur.rejected]: (state, action) => {
        state.isLoading=false;
        state.status=action.payload; 
    },

  }
})
export const {removeSelectedAuteur} = auteurSlice.actions;
export default auteurSlice.reducer