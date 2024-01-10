import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IDFilm, IDetail } from "../Modules"
import { filmsAPI } from "../../Axios/axios"
import { AxiosError } from "axios"


type FIlmSlice = {
    detail: IDetail | null
    loading: boolean
    error: null | string | undefined
}








const initialState: FIlmSlice = {
    detail: null,
    error: null,
    loading: false,
}










export const fetchById = createAsyncThunk<IDetail, string, { rejectValue: string }>(
    'films/fetchByAllFIlms',
    async (id, { rejectWithValue }) => {
        try {
            const res = await filmsAPI.getFilmsId(id)
            console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            const data = res.data
            return data as IDetail
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            throw error
        }
    }

)







const detailSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {



        addCase(fetchById.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchById.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loading = false

        })

        addCase(fetchById.rejected, (state, action) => {

            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No coctails!'
            } else {
                state.error = action.payload
            }
        })



    }
})



export default detailSlice.reducer