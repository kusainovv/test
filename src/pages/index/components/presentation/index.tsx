import React from 'react';
import style from '../../styling/Style.module.scss';
import { Header } from '../../../../shared/core/ui/header';
import { Search } from '../../../../widgets/profile/search';
import { Dialogues } from '../../../../features/dialogues';
import { Profile } from '../../../../features/profile';

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