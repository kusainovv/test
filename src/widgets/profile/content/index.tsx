import React from "react";
import style from './Style.module.scss'
import { ProfileContext } from "../../../shared/core/utilities/profile.context";
import { ProfileTabContentRouting } from "../../../shared/routing/profile/profile.routing";

export const ProfileContent = () => {


    return <ProfileContext.Consumer>
        {value => {
            return <div className={style['Wrapper']}>
                <ProfileTabContentRouting profileTab={value} />
            </div>
        }}
    </ProfileContext.Consumer>
}