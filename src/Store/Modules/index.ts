type IObjectKeys = {
    [key: string]: string | null
}


export type IDFilm = IObjectKeys & {
    kinopoiskId: string
    nameRu: string | null
    nameEn: string | null
    posterUrlPreview: string
    filmId: string | null
}

type ICountry = {
    country: string
}
type IGenres = {
    genre: string
}


export type IDetail = {
    countries: ICountry[]
    description: string | undefined
    genres: IGenres[]
    nameEn: string | undefined
    nameOriginal: string | null
    nameRu: string | null
    posterUrl: string
    ratingKinopoisk: number
    year: number
}