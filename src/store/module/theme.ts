import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AuthService } from "@/service/AuthService.ts";
import { LoginRequest } from "@/model/request/auth/LoginRequest.ts";

export type ThemeState ={
    loading: boolean;
    theme: 'dark' | 'light';
}
const initialState: ThemeState = {
    loading: false,
    theme: 'light'
};

const actions = {
    template: createAsyncThunk(
        "auth/actions/theme",
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
    name: "theme",
    initialState,
    reducers: {
        updateLoading: (state, action) => {
            state.loading = action.payload;
        },
        updateTheme: (state, action: PayloadAction<ThemeState['theme']>) => {
            state.theme = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
    },
});

export const theme = {
    reducer: slice.reducer,
    actions: actions,
    mutation: slice.actions,
};