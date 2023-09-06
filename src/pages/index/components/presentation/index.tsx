import React from 'react';
import style from '../../styling/Style.module.scss';
import { Header } from '../../../../shared/core/ui/header';
import { Search } from '../../../../widgets/search';
import { Dialogues } from '../../../../widgets/dialogues';

export const IndexPagePresentation = () => {
    return <>

        <Header />

        <div className={style['Wrapper']}>

            <div className={style['Content']}>
                <div>
                    <Search />
                    <Dialogues />
                </div>

                <h1>2</h1>
            </div>

        </div>

    </>
}