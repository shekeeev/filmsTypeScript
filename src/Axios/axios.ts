import axios, { Axios } from "axios"




const instanse = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/',
    headers: {
        "Content-Type": "application/json",
        'X-API-KEY': 'ac5ed23f-8ddf-4168-b87e-e57ac42ec67f',

    }
})


export const filmsAPI = {

    getAllFilms() {
        return instanse.get('v2.2/films')
    },
    getByName(value: string) {
        return instanse.get(`v2.1/films/search-by-keyword?keyword=${value}`)
    },
    getFilmsId(id: string) {
        return instanse.get(`v2.2/films/${id}`)
    },

}