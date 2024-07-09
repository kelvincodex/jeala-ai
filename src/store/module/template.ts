import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "@/service/AuthService.ts";
import { LoginRequest } from "@/model/request/auth/LoginRequest.ts";

export type TemplateState ={
    loading: boolean;
}
const initialState: TemplateState = {
    loading: false,
};

const actions = {
    template: createAsyncThunk(
        "auth/actions/template",
        async (data: LoginRequest,  thunkAPI) => {
            try {
                const response = await AuthService.login(data, thunkAPI);
                return response.data;
            } catch (e: any) {
                return thunkAPI.rejectWithValue(e.response.message);
            }
        }
    ),
};
const slice = createSlice({
    name: "template",
    initialState,
    reducers: {
        updateLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(actions.template.pending, (state) => {
                state.loading = false;
            })
            .addCase(actions.template.fulfilled, (state) => {
                state.loading = false;
            });
    },
});

export const template = {
    reducer: slice.reducer,
    actions: actions,
    mutation: slice.actions,
};