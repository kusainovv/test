import React from "react";
import style from './Style.module.scss';
import { MorePoints } from "../../../shared/core/ui/svg/more-points";

export const ProfileHeader = () => {
    return <div className={style['Wrapper']}>
        
        <div className={style['Profile']}>
            <div className={style['ProfileIcon']}></div>

            <div className={style['ProfileInformation']}>
                <p className={style['ProfileInformationName']}>Рожков Денис Петрович</p>
                <p className={style['ProfileInformationAge']}>30 лет, муж</p>
            </div>
        </div>

        <div className={style['MoreButtons']}>
            <MorePoints />
        </div>

    </div>
}