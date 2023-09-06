import React from 'react';
import style from '../../styling/Style.module.scss';
import { Header } from '../../../../widgets/header';

export const IndexPagePresentation = () => {
    return <>

        <Header />

        <div className={style['Wrapper']}>

            <div className={style['Content']}>
                <h1 className={style['t1']}>1</h1>
                <h1 className={style['t2']}>2</h1>
            </div>

        </div>

    </>
}