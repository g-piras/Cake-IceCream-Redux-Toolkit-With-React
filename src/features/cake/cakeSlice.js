import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfCakes: 10
}

/*  -----------------------------------------------------------------------------------------------
  cakeSlice generates the cake reducer and cake actions
--------------------------------------------------------------------------------------------------- */

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions 