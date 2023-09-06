import React from "react";
import { ProfileHeader } from "./header";
import style from './Style.module.scss';

export const Profile = () => {
    return <div className={style['Wrapper']}>
        <ProfileHeader />
    </div>
}