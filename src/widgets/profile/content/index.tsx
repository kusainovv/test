import React from "react";
import style from './Style.module.scss'
import { ProfileContext } from "../../../shared/core/utilities/profile.context";
import { ProfileTabNotes } from "../tabs/tabs/notes";
import { ProfileTabConsultation } from "../tabs/tabs/consultation";
import { ProfileTabVideos } from "../tabs/tabs/videos";
import { ProfileTabEvents } from "../tabs/tabs/events";

export const ProfileContent = () => {

    return <ProfileContext.Consumer>
        {value => {
            console.log(value)
            return <div className={style['Wrapper']}>
                {
                    value.isOpenNotesTab
                    ? <ProfileTabNotes />
                    : value.isOpenConsultationsTab
                        ? <ProfileTabConsultation />
                        : value.isOpenVideosTab 
                            ? <ProfileTabVideos />
                            : <ProfileTabEvents />
                }
            </div>
        }}
    </ProfileContext.Consumer>
}