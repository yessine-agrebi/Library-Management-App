import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { editeurService } from '../services/editeurs';

//add >Editeur
export const addEditeur = createAsyncThunk(
    "editeur/addEditeur",
    async(editeur, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await editeurService.addEditeur(editeur);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
// get >Editeurs
export const getEditeurs = createAsyncThunk(
    "editeur/getEditeurs",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;

        try {
            const res = await editeurService.getEditeurs();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//get one >Editeur
export const getEditeurByID = createAsyncThunk(
    "editeur/getEditeurByID",
    async (editeurID, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await editeurService.getEditeurByID(editeurID);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

);

//delete >Editeur
export const deleteEditeur = createAsyncThunk(
    "editeur/deleteEditeur",
    async (editeurID, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await editeurService.deleteEditeur(editeurID);
            return editeurID;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//update >Editeur
export const updateEditeur = createAsyncThunk(
    "editeur/updateEditeur",
    async (editeur, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await editeurService.updateEditeur(editeur);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)








export const editeurSlice = createSlice({
  name: 'editeur',
  initialState: {
    editeurs: [],
    editeur: {},
    isLoading: false,
    success: null,
    error: null
  },
  reducers : {
    removeSelectedEditeur: (state) => {
        state.success = null
        state.error = null
    }
  },
  extraReducers: {
    //get authors
    [getEditeurs.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [getEditeurs.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.editeurs = action.payload;
    },
    [getEditeurs.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
        console.log("impossible de se connecter au serveur")
    },
    //get >Editeur by ID
    [getEditeurByID.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [getEditeurByID.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.editeur = action.payload;
    },
    [getEditeurByID.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
        console.log("Pas d'editeurs")
    },
    //add >Editeur
    [addEditeur.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [addEditeur.fulfilled]:(state, action) => {
        state.editeurs.push(action.payload);
        state.isLoading = false;
        state.success = action.payload;
    },
    [addEditeur.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
    },
    // update >Editeur
    [updateEditeur.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [updateEditeur.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.editeurs = state.editeurs.map(item => item._id === action.payload._id ? action.payload : item)
    },
    [updateEditeur.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
    },
    // delete >Editeur
    [deleteEditeur.pending]: (state, action) => {
        state.isLoading=true;
        state.status=null; 
    },
    [deleteEditeur.fulfilled]: (state, action) => {
        state.isLoading=false;
        state.status=action.payload; 
        state.editeurs=state.editeurs.filter((item)=>
        item._id!==action.payload)
    },
    [deleteEditeur.rejected]: (state, action) => {
        state.isLoading=false;
        state.status=action.payload; 
    },

  }
})
export const {removeSelectedEditeur} = editeurSlice.actions;
export default editeurSlice.reducer