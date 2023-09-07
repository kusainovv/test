import React from "react";
import { SearchField } from "../../../shared/core/ui/fields/search";
import style from './Style.module.scss';
import { Add } from "../../../shared/core/ui/svg/plus";
import { MenuUnfold } from "../../../shared/core/ui/svg/menu-unfold";

export const Search = () => {
    return <div className={style['Wrapper']}>
        <SearchField />

        <div className={style['Icons']}>
            <div className={style['MenuUnfoldIcon']}>
                <MenuUnfold />
            </div>

            <div className={style['AddIcon']}>
                <Add />
            </div>
        </div>    
    </div>
}