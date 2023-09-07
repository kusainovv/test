import React from "react";
import style from './Style.module.scss';
import { Send } from "../../../shared/core/ui/svg/send";
import { DialogTabProps } from "../../../shared/components/dialogues";
import { Warning } from "../../../shared/core/ui/svg/warning";

export const DialogTab = (props: DialogTabProps) => {
    const user = props.user;

    const isReadenStyles = props.isReaden ? {
        borderLeft: '2px solid #4198C5'
    } : {}

    const isChoosenStyles = props.isDialogueTab ? {
        backgroundColor: '#F1F2F4'
    } : {}

    return <div className={style['Dialogue']} onClick={props.selectCurrentDialogueTab} style={{ ...isReadenStyles, ...isChoosenStyles }}>
        <div className={style['DialogueProfile']}>
            <div className={style['DialogueProfileIcon']} style={{
                backgroundImage: `url(${user.icon})`
            }}>
            </div>

            <p className={style['DialogueProfileName']}>{user.username}</p>
        </div>

        {
            props.order === 0 ?  <Send /> : props.order === 2 ? <Warning /> : null
        }
       
    </div>
}