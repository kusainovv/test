import React from "react";
import style from './Style.module.scss'
import { ProfileContext } from "../../../shared/core/utilities/profile.context";
import { ProfileTabNotes } from "../tabs/tabs/notes";

export const ProfileContent = () => {

    return <ProfileContext.Consumer>
        {value => {
            console.log(value)
            return <div className={style['Wrapper']}>
                {
                    value.isOpenNotesTab
                    ? <ProfileTabNotes />
                    : null
                }
            </div>
        }}
    </ProfileContext.Consumer>
}