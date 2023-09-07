import React, { Fragment, useMemo, useState } from "react";
import { DialoguesPresentation } from "../presentation";
import { UsersMockData } from "../../../../shared/mock/profile";
import { DialogTab } from "../../tab/dialog-tab";


export const DialoguesContainer = () => {

    const [activeDialogueTab, setActiveDialogueTab] = useState(null);

    const allDialogues = useMemo(() => UsersMockData.map((user, idx) => {
        return <Fragment key={idx}>
            <DialogTab isDialogueTab={activeDialogueTab === idx} user={user} order={idx} isReaden={idx === 0} selectCurrentDialogueTab={() => {
                setActiveDialogueTab(idx);
            }} />
        </Fragment>}), [ activeDialogueTab ])


    return <DialoguesPresentation allDialogues={allDialogues} />
}