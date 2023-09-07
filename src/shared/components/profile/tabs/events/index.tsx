import React from "react";
import style from './Style.module.scss';
import { Time } from "../../../../../shared/core/ui/svg/time";
import { Calendar } from "../../../../../shared/core/ui/svg/calendar";
import { WebinarCamera } from "../../../../../shared/core/ui/svg/webinar-camera";

export const ProfileTabEvents = () => {

    return <div className={style['Wrapper']}>
        <div className={style['Event']}>
            <div className={style['EventContent']}>
                <div className={style['EventPreview']} />

                <div className={style['EventDescription']}>
                    <p className={style['EventTitle']}>Крабик, ходьба в бок в приседе с двумя резинками Кра…</p>

                    <div className={style['VideoDetails']}>
                        <div className={style['EventType']}>
                            <WebinarCamera />
                            <span className={style['VideoDetails__label']}>Вебинар</span>
                        </div>

                        <div className={style['EventDate']}>
                            <Calendar />
                            <span className={style['VideoDetails__label']}>9 марта 2021</span>
                        </div>

                        <div className={style['EventTime']}>
                            <Time />
                            <span className={style['VideoDetails__label']}>17:00</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        <div className={style['Event']}>
            <div className={style['EventContent']}>
                <div className={style['EventPreview']} />

                <div className={style['EventDescription']}>
                    <p className={style['EventTitle']}>Крабик, ходьба в бок в приседе с двумя резинками Кра…</p>

                    <div className={style['VideoDetails']}>
                        <div className={style['EventType']}>
                            <WebinarCamera />
                            <span className={style['VideoDetails__label']}>Вебинар</span>
                        </div>

                        <div className={style['EventDate']}>
                            <Calendar />
                            <span className={style['VideoDetails__label']}>9 марта 2021</span>
                        </div>

                        <div className={style['EventTime']}>
                            <Time />
                            <span className={style['VideoDetails__label']}>17:00</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        <div className={style['Event']}>
            <div className={style['EventContent']}>
                <div className={style['EventPreview']} />

                <div className={style['EventDescription']}>
                    <p className={style['EventTitle']}>Крабик, ходьба в бок в приседе с двумя резинками Кра…</p>

                    <div className={style['VideoDetails']}>
                        <div className={style['EventType']}>
                            <WebinarCamera />
                            <span className={style['VideoDetails__label']}>Вебинар</span>
                        </div>

                        <div className={style['EventDate']}>
                            <Calendar />
                            <span className={style['VideoDetails__label']}>9 марта 2021</span>
                        </div>

                        <div className={style['EventTime']}>
                            <Time />
                            <span className={style['VideoDetails__label']}>17:00</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
}