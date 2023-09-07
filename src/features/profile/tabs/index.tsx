import React, { useState } from "react";
import { Add } from "../../../shared/core/ui/svg/plus";
import style from './Style.module.scss'
import { ProfileContext } from "../../../shared/core/utilities/profile.context";

export const ProfileTabs = () => {

    const [activeProfileTab, setActiveProfileTab] = useState(0);

    return <ProfileContext.Consumer>
        {value => {
            return <div className={style['Wrapper']}>

                <div className={style['Navigations']}>
                    {
                        ['Заметки', 'Консультация', 'Видео', 'Меропрития'].map((navigation, idx) => {
                            return <div key={idx} onClick={() => {
                                setActiveProfileTab(idx);
                                
                                if (navigation === 'Заметки') {
                                    value.openNotesTab();
                                } else if (navigation === 'Консультация') {
                                    value.openConsultationsTab();
                                } else if (navigation === 'Видео') {
                                    value.openVideosTab();
                                } else {
                                    value.openEventsTab();
                                }

                            }} style={idx === activeProfileTab ? { color: '#4198C5' } : {}} className={style['Navigation']}>
                                {navigation}
                            </div>
                        })
                    }
                </div>


                <div className={style['CreateNote']}>
                    <p className={style['CreateNoteLabel']}>
                        { value.isOpenNotesTab ? 'Новая заметка' : value.isOpenConsultationsTab ? 'Записать' : value.isOpenVideosTab ? 'Рекомендовать' : 'Рекомендовать' }
                    </p>

                    <div className={style['AddWrapper']}>
                        <Add />
                    </div>
                </div>

            </div>
        }}
    </ProfileContext.Consumer>
}