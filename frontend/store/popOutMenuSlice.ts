import { createSlice } from "@reduxjs/toolkit";
import {AppState} from './store'

interface menuState {
    menuState: boolean;
}

const initialState: menuState = {
    menuState: false,
};

export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers: {
        setMenuState(state, action){
            state.menuState = action.payload;
        },
    }
})

export const {setMenuState} = menuSlice.actions;

export const selectMenuState = (state: AppState) => state.menu.menuState;

export default menuSlice.reducer;
