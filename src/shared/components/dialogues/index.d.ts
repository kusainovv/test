import { MouseEventHandler } from "react";

export interface DialogTabProps {
    isDialogueTab: boolean,
    selectCurrentDialogueTab: MouseEventHandler<HTMLDivElement>,
    isReaden: boolean,
    order: number
}