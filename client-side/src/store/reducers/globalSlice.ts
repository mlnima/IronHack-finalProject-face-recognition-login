import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../store";

export interface GlobalSliceTypes {
    loading: boolean,
    alert:{
        type:string,
        active:boolean,
        message:string
    }
}

const initialState: GlobalSliceTypes = {
    loading: false,
    alert:{
        type:'',
        active:false,
        message:''
    }
};



export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<any>) => {
            state.loading = action.payload;
        },
        setAlert: (state, action: PayloadAction<any>) => {
            state.alert = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(xxx.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(xxx.fulfilled, (state, action) => {
    //             return {
    //                 ...state,
    //                 loading: false,
    //                 error: false,
    //                 errorMessage: undefined
    //             }
    //         })
    //         .addCase(xxx.rejected, (state, action) => {
    //             return {
    //                 ...state,
    //                 error: false,
    //                 errorMessage: undefined
    //             }
    //         });
    // },
});

export const {setLoading,setAlert} = globalSlice.actions;

export const globalReducer = (state: RootState) => state?.global || null;

export default globalSlice.reducer;