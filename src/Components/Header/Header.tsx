import React, { FC, FormEventHandler, useState } from 'react';
import { fetchByNameFilms } from '../../Store/Slice/filmSlice';
import { useAppDispatch } from '../../Store/Hooks/Hooks';
import s from './Header.module.css'
const Header: FC = () => {

    const [value, setValue] = useState('')
    const dispath = useAppDispatch()
    console.log(value);

    const hendallSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (value.trim().length) {
            dispath(fetchByNameFilms(value))
        }
        setValue('')
    }


    return (
        <div>
            <form className={s.display} onSubmit={hendallSearch}>
                <input
                    id={s.inp}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text" placeholder='Film Name' />
                <button className={s.uiBtn}><span>Search</span></button>

            </form>
        </div>
    );
};

export default Header;
