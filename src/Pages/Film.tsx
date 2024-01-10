import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../Store/Hooks/Hooks';
import { fetchById } from '../Store/Slice/detailSlice';
import { useParams } from 'react-router-dom';

const Film: FC = () => {

    const dispath = useAppDispatch()
    const { id } = useParams()
    useEffect(() => {
        id && dispath(fetchById(id))

    }, [dispath, id])


    const { detail, error, loading } = useAppSelector(state => state.detail)
    if (loading) {
        return <h1>loading</h1>
    }
    console.log(detail);




    return (
        <div className='orange'>

            {
                loading ?
                    <h1>Looading...</h1>
                    : error ?
                        <span>{error}</span>
                        :
                        <>
                            <img className='imgFilm' width={400} src={detail?.posterUrl} alt={detail?.posterUrl} />
                            <h1>{detail?.nameRu || detail?.nameOriginal}</h1>
                            <h2>{detail?.description}</h2>
                            <h3> рейтинг:{detail?.ratingKinopoisk}</h3>
                            {/* <h4>год:{detail?.year}</h4> */}
                            <ul>
                                {
                                    detail?.countries?.map((el, i) => (
                                        <li key={i}>{el.country}</li>
                                    )
                                    )
                                }
                            </ul>
                            <ol>
                                {
                                    detail?.genres?.map((el, i) => (
                                        <li key={i}>{el.genre}</li>
                                    )
                                    )
                                }
                            </ol>
                        </>


            }

        </div>
    );
};

export default Film;