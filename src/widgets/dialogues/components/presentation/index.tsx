import React from "react";
import { DialoguesPresentationProps } from "../../../../shared/components/dialogues";
import style from '../../styling/Style.module.scss';

export const DialoguesPresentation = (props: DialoguesPresentationProps) => {
    return <div className={style['Wrapper']}>
        <div className={style['DialoguesHeader']}>
            <p className={style['DialoguesHeader__count']}>213</p>
            <p className={style['DialoguesHeader__select']}>Выбрать</p>
        </div>

        <div className={style['Dialogues']}>
            {props.allDialogues}
        </div>
    </div>
}