import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    type: '',
    username: '',
    password: '',
    isLoading: false
};

const HOST = 'https://test.v5.pryaniky.com';

const RootReducers = createReducer(initialState, bulder => {
    bulder
        .addCase('GETKEY', state => {
            state.isLoading = true;
        })
        .addCase('GETDATA', state => {
            state.isLoading = true;
        })
        .addCase('SENDDATA', state => {
            state.isLoading = true;
        })
        .addCase('ADDDATA', state => {
            state.isLoading = true;
        })
        .addCase('DELETEDATA', state => {
            state.isLoading = true;
        });
});
export default RootReducers;