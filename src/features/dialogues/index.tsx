import React, { Fragment, useMemo, useState } from "react";
import style from './Style.module.scss';
import { DialogTab } from "../../widgets/dialogues/tab/dialog-tab";
import { UsersMockData } from "../../shared/mock/profile";

export const Dialogues = () => {
    
    const [activeDialogueTab, setActiveDialogueTab] = useState(null);

    const allDialogues = useMemo(() => UsersMockData.map((user, idx) => {
        return <Fragment key={idx}>
            <DialogTab isDialogueTab={activeDialogueTab === idx} user={user} order={idx} isReaden={idx === 0} selectCurrentDialogueTab={() => {
                setActiveDialogueTab(idx);
            }} />
        </Fragment>}), [ activeDialogueTab ])

    return <div className={style['Wrapper']}>
        <div className={style['DialoguesHeader']}>
            <p className={style['DialoguesHeader__count']}>213</p>
            <p className={style['DialoguesHeader__select']}>Выбрать</p>
        </div>

        <div className={style['Dialogues']}>
            {allDialogues}
        </div>
    </div>
}