import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { specialiteService } from '../services/specialite';

//add >Specialite
export const addSpecialite = createAsyncThunk(
    "specialite/addSpecialite",
    async(specialite, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await specialiteService.addSpecialite(specialite);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
// get >Specialites
export const getSpecialites = createAsyncThunk(
    "specialite/getSpecialites",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;

        try {
            const res = await specialiteService.getSpecialites();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//get one >Specialite
export const getSpecialiteByID = createAsyncThunk(
    "specialite/getSpecialiteByID",
    async (specialiteID, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await specialiteService.getSpecialiteByID(specialiteID);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

);

//delete >Specialite
export const deleteSpecialite = createAsyncThunk(
    "specialite/deleteSpecialite",
    async (specialiteID, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await specialiteService.deleteSpecialite(specialiteID);
            return specialiteID;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//update >Specialite
export const updateSpecialite = createAsyncThunk(
    "specialite/updateSpecialite",
    async (specialite, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await specialiteService.updateSpecialite(specialite);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)








export const SpecialiteSlice = createSlice({
  name: 'specialite',
  initialState: {
    specialites: [],
    specialite: {},
    isLoading: false,
    success: null,
    error: null
  },
  reducers : {
    removeSelectedSpecialite: (state) => {
        state.success = null
        state.error = null
    }
  },
  extraReducers: {
    //get authors
    [getSpecialites.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [getSpecialites.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.specialites = action.payload;
    },
    [getSpecialites.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
        console.log("impossible de se connecter au serveur")
    },
    //get >Specialite by ID
    [getSpecialiteByID.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [getSpecialiteByID.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.specialite = action.payload;
    },
    [getSpecialiteByID.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
        console.log("Pas d'Specialites")
    },
    //add >Specialite
    [addSpecialite.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [addSpecialite.fulfilled]:(state, action) => {
        state.Specialites.push(action.payload);
        state.isLoading = false;
        state.success = action.payload;
    },
    [addSpecialite.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
    },
    // update >Specialite
    [updateSpecialite.pending]:(state, action) => {
        state.isLoading = true;
        state.success = null;
    },
    [updateSpecialite.fulfilled]:(state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        state.specialites = state.specialites.map(item => item._id === action.payload._id ? action.payload : item)
    },
    [updateSpecialite.rejected]: (state, action) => {
        state.isLoading=false;
        state.success=action.payload;
    },
    // delete >Specialite
    [deleteSpecialite.pending]: (state, action) => {
        state.isLoading=true;
        state.status=null; 
    },
    [deleteSpecialite.fulfilled]: (state, action) => {
        state.isLoading=false;
        state.status=action.payload; 
        state.specialites=state.specialites.filter((item)=>
        item._id!==action.payload)
    },
    [deleteSpecialite.rejected]: (state, action) => {
        state.isLoading=false;
        state.status=action.payload; 
    },

  }
})
export const {removeSelectedSpecialite} = SpecialiteSlice.actions;
export default SpecialiteSlice.reducer