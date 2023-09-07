import React from 'react';
import style from './Style.module.scss';
import { Magnifier } from '../../svg/magnifier';

export const SearchField = () => {
   
    return <label className={style['Input']}>
        <div className={style['Magnifier']}>
            <Magnifier />
        </div>
    </label>
}