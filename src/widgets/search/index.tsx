import React from "react";
import { SearchField } from "../../shared/core/ui/fields/search";
import style from './Style.module.scss';
import { DropMenu } from "../../shared/core/ui/svg/drop-menu";
import { Add } from "../../shared/core/ui/svg/add";

export const Search = () => {
    return <div className={style['Wrapper']}>
        <SearchField />

        <div className={style['Icons']}>
            <div className={style['DropMenuIcon']}>
                <DropMenu />
            </div>

            <div className={style['AddIcon']}>
                <Add />
            </div>
        </div>    
    </div>
}