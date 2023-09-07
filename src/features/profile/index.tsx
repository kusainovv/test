import React, { createContext } from "react";
import { ProfileHeader } from "../../widgets/profile/header";
import style from './Style.module.scss';
import { ProfileTabs } from "./tabs";
import { ProfileContent } from "./content";
import { useProfileTab } from "../../shared/core/utilities/useProfileTab";
import { ProfileContext } from "../../shared/core/utilities/profile.context";

export const Profile = () => {

    const profileTab = useProfileTab();

    return <ProfileContext.Provider value={profileTab}>
        <div className={style['Wrapper']}>
            <ProfileHeader />
            <ProfileTabs />

            <ProfileContent />
        </div>
    </ProfileContext.Provider>
}