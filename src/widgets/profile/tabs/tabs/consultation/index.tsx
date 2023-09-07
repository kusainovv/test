import React from "react";
import style from './Style.module.scss';
import { Camera } from "../../../../../shared/core/ui/svg/camera";
import { Friends } from "../../../../../shared/core/ui/svg/friends";

export const ProfileTabConsultation = () => {

    return <div className={style['Wrapper']}>
        <div className={style['Consultation']}>
            <div className={style['ConsultationContent']}>
                <div className={style['ConsultationCamera']}>
                    <Camera />
                </div>

                <div className={style['ConsultationDescription']}>
                    <p className={style['ConsultationTitle']}>Online консультация</p>
                    <p className={style['ConsultationTime']}>15.01.2019 12:30-13:00</p>
                </div>
            </div>
        </div>

        <div className={style['Consultation']}>
            <div className={style['ConsultationContent']}>
                <div className={style['ConsultationCamera']}>
                    <Camera />
                </div>

                <div className={style['ConsultationDescription']}>
                    <p className={style['ConsultationTitle']}>Online консультация</p>
                    <p className={style['ConsultationTime']}>15.01.2019 12:30-13:00</p>
                </div>
            </div>
        </div>

        <div className={style['Consultation']}>
            <div className={style['ConsultationContent']}>
                <div className={style['ConsultationCamera']}>
                    <Friends />
                </div>

                <div className={style['ConsultationDescription']}>
                    <p className={style['ConsultationTitle']}>Личный приём</p>
                    <p className={style['ConsultationTime']}>15.01.2019 12:30-13:00</p>
                </div>
            </div>

            <p className={style['ConsultationNotConfirmed']}>Не подтверждена</p>
        </div>
    </div>
}