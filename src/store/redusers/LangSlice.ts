import {createSlice} from '@reduxjs/toolkit'

interface Istate {
    [key: string]: string
}
const initialState: Istate = {
    value: 'ru',
}

export const langSlice: any = createSlice({
    name: 'language',
    initialState,
    reducers: {
        change(state) {
            if(state.value === 'ru'){
                state.value = 'eng';
            } else {
                state.value = 'ru';
            }
        }

    }
});

export default langSlice.reducer;