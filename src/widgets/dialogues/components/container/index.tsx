import React, { Fragment, useMemo, useState } from "react";
import { DialoguesPresentation } from "../presentation";
import { UsersMockData } from "../../../../shared/mock/profile";
import { DialogTab } from "../../tab/dialog-tab";


export const DialoguesContainer = () => {
    const [isSelectDialogues, setSelectDialogues] = useState(false);
    const [activeDialogueTab, setActiveDialogueTab] = useState(null);

    const [dialoguesCount, setDialoguesCount] = useState([]);

    const addOneDialogue = (dialogue_id: number) => { setDialoguesCount(prevState => ([...prevState, { dialogue_id }])) }
    const substractOneDialogue = (dialogue_id: number) => { setDialoguesCount(prevState => prevState.filter(dialogue => dialogue.dialogue_id !== dialogue_id)) }

    const selectAllDialogues = () => { setDialoguesCount(Array.from({ length: UsersMockData.length }).map((_, idx) => ({ dialogue_id: idx + 1 }))) }
    const unSelectAllDialogues = () => { setDialoguesCount([]) }

    const editUsers = () => {
        setSelectDialogues(!isSelectDialogues);
    }

    const allDialogues = useMemo(() => UsersMockData.map((user, idx) => {
        return <Fragment key={idx}>
            <DialogTab isDialogueTab={activeDialogueTab === idx} user={user}
                order={idx} isSelectDialogues={isSelectDialogues} isSelectDialogue={dialoguesCount.some(dialogue => dialogue.dialogue_id === idx + 1)} isReaden={idx === 0}
                selectCurrentDialogueTab={() => { setActiveDialogueTab(idx); }}
                addOneDialogue={() => addOneDialogue(user.id)}
                substractOneDialogue={() => substractOneDialogue(user.id)}
            />
        </Fragment>
    }), [activeDialogueTab, isSelectDialogues, dialoguesCount])

    return <DialoguesPresentation allDialogues={allDialogues} dialoguesCount={dialoguesCount}
        isSelectDialogues={isSelectDialogues} editUsers={editUsers}
        selectAllDialogues={selectAllDialogues} unSelectAllDialogues={unSelectAllDialogues}
    />
}