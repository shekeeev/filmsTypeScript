import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { filmsAPI } from "../../Axios/axios"
import { AxiosError } from "axios"
import { IDFilm, IDetail } from "../Modules"


type FIlmSlice = {
    list: IDFilm[]
    // detail: IDetail | null | IDFilm
    loading: boolean
    error: null | string | undefined
}








const initialState: FIlmSlice = {
    list: [],
    // detail: null,
    error: null,
    loading: false,
}






export const fetchByAllFIlms = createAsyncThunk<IDFilm[], void, { rejectValue: string }>(
    'films/fetchByAllFIlms',
    async (_, { rejectWithValue }) => {
        try {
            const res = await filmsAPI.getAllFilms()
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.items
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            throw error
        }
    }

)






export const fetchByNameFilms = createAsyncThunk<IDFilm[], string, { rejectValue: string }>(
    'films/fetchByNameFilms',
    async (value, { rejectWithValue }) => {
        try {
            const res = await filmsAPI.getByName(value)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.films
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            throw error
        }
    }

)


















const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {

        addCase(fetchByAllFIlms.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchByAllFIlms.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false

        })

        addCase(fetchByAllFIlms.rejected, (state, action) => {

            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No coctails!'
            } else {
                state.error = action.payload
            }
        })




        addCase(fetchByNameFilms.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchByNameFilms.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false

        })

        addCase(fetchByNameFilms.rejected, (state, action) => {

            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No coctails!'
            } else {
                state.error = action.payload
            }
        })









    }
})








export default filmSlice.reducer