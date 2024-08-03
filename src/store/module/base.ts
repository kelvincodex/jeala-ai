import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ModalConstant} from "@/util/constant/ModalConstant.ts";

export type BaseState ={
    loading: boolean;
    modal?: {show: boolean, component?: ModalConstant | null}
}
const initialState: BaseState = {
    loading: false,
    modal: {show: false}
};

const actions = {};
const slice = createSlice({
    name: "base",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setModal: (state, action: PayloadAction<BaseState['modal']>) => {
            if (state.modal?.show && action.payload?.show){
                state.modal.show = false;
            }else {
                state.modal = action.payload;
            }


        }
    },
    extraReducers: (builder) => {
        builder
    },
});

export const base = {
    reducer: slice.reducer,
    actions: actions,
    mutation: slice.actions,
};