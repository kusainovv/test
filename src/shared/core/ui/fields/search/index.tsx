import React from 'react';
import { Magnifer } from '../../svg/magnifer';
import style from './Style.module.scss';

export const SearchField = () => {
   
    return <label className={style['Input']}>
        <div className={style['Magnifier']}>
            <Magnifer />
        </div>
    </label>
}