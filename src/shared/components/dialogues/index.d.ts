import { MouseEventHandler, ReactNode } from "react";
import { User } from "../../mock/profile/typing";

export interface DialogTabProps {
    isDialogueTab: boolean,
    selectCurrentDialogueTab: MouseEventHandler<HTMLDivElement>,
    isReaden: boolean,
    order: number,
    user: User
}

export interface DialoguesPresentationProps {
    allDialogues: ReactNode[]
}