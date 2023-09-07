import React from "react";
import { DialoguesPresentationProps } from "../../../../shared/components/dialogues";
import style from '../../styling/Style.module.scss';
import { Checkbox } from "../../../../shared/components/dialogues/checkbox";

export const DialoguesPresentation = (props: DialoguesPresentationProps) => {
    return <div className={style['Wrapper']}>
        <div className={style['DialoguesHeader']}>
            <div className={style['DialoguesHeaderSelect']}>
                {
                    props.isSelectDialogues
                        ? <label className={style['DialoguesSelect']}>
                            <Checkbox
                                onSelect={props.selectAllDialogues}
                                onUnSelect={props.unSelectAllDialogues} />
                            <span className={style['DialoguesCheckboxLabel']}>Все</span>
                        </label>
                        : null
                }
                <p className={style['DialoguesHeader__count']}>{props.isSelectDialogues ? props.dialoguesCount.length : '213'}</p>
            </div>


            {
                props.isSelectDialogues
                    ? <div className={style['DialoguesActions']}>
                        <span className={style['DialoguesAction']}>Действия</span>
                        <span className={style['DialoguesAction']}>Отменить</span>
                    </div>
                    : <p className={style['DialoguesHeader__select']} onClick={() => props.editUsers()}>Выбрать</p>
            }

        </div>

        <div className={style['Dialogues']}>
            {props.allDialogues}
        </div>
    </div>
}