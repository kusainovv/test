import React from 'react';
import style from '../../styling/Style.module.scss';
import { Header } from '../../../../shared/core/ui/header';
import { Search } from '../../../../widgets/search';
import { Dialogues } from '../../../../widgets/dialogues';
import { Profile } from '../../../../widgets/profile';

export const IndexPagePresentation = () => {
    return <>

        <Header />

        <div className={style['Wrapper']}>

            <div className={style['Content']}>
                <div>
                    <Search />
                    <Dialogues />
                </div>

                <Profile />
            </div>

        </div>

    </>
}