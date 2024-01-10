import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import Film from '../../Pages/Film';

const Main: FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/film/:id' element={<Film />} />

            </Routes>
        </div>
    );
};

export default Main;