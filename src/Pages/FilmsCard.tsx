import React, { FC } from 'react';
import { IDFilm } from '../Store/Modules';
import { Link } from 'react-router-dom';

const FilmsCard: FC<IDFilm> = ({ nameRu, nameEn, kinopoiskId, posterUrlPreview, filmId }) => {
    return (
        <div>
            <Link
                to={`/film/${kinopoiskId || filmId}`}>
                <img className='imgFilm' width={300} src={posterUrlPreview} alt={posterUrlPreview} />
                <h1 className='hFilm'>{nameRu || nameEn}</h1>
            </Link>
        </div>
    );
};

export default FilmsCard;