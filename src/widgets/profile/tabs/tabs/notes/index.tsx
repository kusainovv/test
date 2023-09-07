import React, { Fragment } from "react";
import { ThreePoints } from "../../../../../shared/core/ui/svg/three-points";
import style from './Style.module.scss';

export const ProfileTabNotes = () => {

    return <div className={style['Wrapper']}>
        <div className={style['Note']}>
            <div className={style['NoteWrapper']}>
                <div className={style['NoteInformation']}>
                    <span className={style['NoteInformation__date']}>20.12.2019</span>
                    <span className={style['NoteInformation__description']}>Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.</span>
                </div>

                <div className={style['MoreButton']}>
                    <ThreePoints />
                </div>
            </div>
        </div>

        <div className={style['Note']}>
            <div className={style['NoteWrapper']}>
                <div className={style['NoteInformation']}>
                    <span className={style['NoteInformation__date']}>20.12.2019</span>
                    <span className={style['NoteInformation__description']}>Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.</span>
                </div>

                <div className={style['MoreButton']}>
                    <ThreePoints />
                </div>
            </div>

            <div className={style['NoteImage']}></div>
        </div>
    </div>
}