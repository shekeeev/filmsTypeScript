import { configureStore } from "@reduxjs/toolkit"
import filmSlice from "./Slice/filmSlice"
import detailSlice from "./Slice/detailSlice"




const store = configureStore({
    reducer: {
        films: filmSlice,
        detail: detailSlice,
    }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch