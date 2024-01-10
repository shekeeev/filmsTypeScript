import React, { FC } from 'react';
import { useAppSelector } from '../Store/Hooks/Hooks';
import FilmsCard from './FilmsCard';

const Output: FC = ({ }) => {

    const { error, list, loading } = useAppSelector(state => state.films)

    return (
        <div>
            <div className='adi'>
                {
                    loading ?
                        <h1>Looading...</h1>
                        : error ?
                            <span>{error}</span>
                            :
                            list.length > 0 ?
                                list.map(el => <FilmsCard key={el.kinopoiskId || el.filmId} {...el} />)
                                :
                                <h2> No Broouuuu,No Films!</h2>
                }
            </div>
        </div>
    );
};

export default Output;