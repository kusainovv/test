import React from "react";
import style from './Style.module.scss';

export const ProfileTabVideos = () => {

    return <div className={style['Wrapper']}>
        <div className={style['Video']}>
            <div className={style['VideoContent']}> 
                <div className={`${style.VideoPreview} ${style.VideoPreviewFirst}`} />

                <div className={style['VideoDescription']}>
                    <p className={style['VideoTitle']}>Крабик, ходьба в бок в приседе с двумя резинками Кра…</p>
                    <p className={style['VideoTime']}>Астахова Е.В</p>
                </div>
            </div>
        </div>

        <div className={style['Video']}>
            <div className={style['VideoContent']}> 
                <div className={`${style.VideoPreview} ${style.VideoPreviewSecond}`} />

                <div className={style['VideoDescription']}>
                    <p className={style['VideoTitle']}>Разминка для локтевого сустава</p>
                    <p className={style['VideoTime']}>Астахова Е.В</p>
                </div>
            </div>

            <p className={style['VideoTime']}>15.01.2019 - 22.01.2019</p>
        </div>

        <div className={style['Video']}>
            <div className={style['VideoContent']}> 
                <div className={`${style.VideoPreview} ${style.VideoPreviewThird}`} />

                <div className={style['VideoDescription']}>
                    <p className={style['VideoTitle']}>Разминка для локтевого суставаРазминка для локтевого..</p>
                    <p className={style['VideoTime']}>Астахова Е.В</p>
                </div>
            </div>

            <p className={style['VideoTime']}>15.01.2019 - 22.01.2019</p>
        </div>
    </div>
}