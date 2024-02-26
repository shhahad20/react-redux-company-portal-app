import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import {CompaniesState, CompaniesAction} from '../types';


const initialState : CompaniesState ={
  data: [],
  isLoading: false,
  error:null,
  search:'',
  singleCompany: null
}

// Async Call | The first parameter is the action type, async function 
export const fetchData = createAsyncThunk('companies/fetchData', async()=> {
  try {
    const response = await fetch('https://api.github.com/organizations');
    if (!response.ok) {
      throw new Error('Network response error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
  console.log(error) 
}});


export const fetchCompany = createAsyncThunk('companies/fetchCompany', async(id: number)=> {
  try {
    const response = await fetch(`https://api.github.com/orgs/${id}`);
    if (!response.ok) {
      throw new Error('Network response error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
  console.log(error) 
}});



const companiesReducer = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {
    searchCompany: (state, action) =>{
      state.search = action.payload;
    },
    sortCompany: (state, action) =>{
      const sortingValue = action.payload;
      console.log(sortingValue);
      if (sortingValue === 'login'){
        state.data.sort((a,b) => a.login.localeCompare(b.login))
      }
      else if (sortingValue === 'id'){
        state.data.sort((a,b)=> a.id - b.id)
      }
    },
  },
  extraReducers: (builder) =>{
    builder
    .addCase(fetchData.pending, (state, action) => { // Here when we still didn't fetch the data, we use isLoading. we can remove the action.
      state.isLoading = true;
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchData.rejected, (state, action) => {
      state.error = action.error.message || 'An error.';
      state.isLoading = false;
    })
    // Single Company Cases
    .addCase(fetchCompany.pending, (state, action) => { // Here when we still didn't fetch the data, we use isLoading. we can remove the action.
      state.isLoading = true;
    })
    .addCase(fetchCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleCompany = action.payload;
    })
    .addCase(fetchCompany.rejected, (state, action) => {
      state.error = action.error.message || 'An error.';
      state.isLoading = false;
    })

  },
})

export const { searchCompany, sortCompany} = companiesReducer.actions;

export default companiesReducer.reducer;