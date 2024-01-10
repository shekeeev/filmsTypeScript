import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../Store/Hooks/Hooks';
import { fetchByAllFIlms } from '../Store/Slice/filmSlice';
import Header from '../Components/Header/Header';
import Output from './Output';

const Home: FC = () => {

    const dispath = useAppDispatch()

    useEffect(() => {
        dispath(fetchByAllFIlms())

    }, [dispath])

    return (
        <div>
            <>
                <Header />
                <section>
                    <Output />
                </section>
            </>
        </div>
    );
};

export default Home;