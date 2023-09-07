import { MouseEventHandler, ReactNode } from "react";
import { User } from "../../mock/profile/typing";
import { DialogueCount } from "./dialogues";

export interface DialogTabProps extends DialogueCount {
    isDialogueTab: boolean,
    selectCurrentDialogueTab: MouseEventHandler<HTMLDivElement>,
    isReaden: boolean,
    order: number,
    user: User,
    isSelectDialogues: boolean,
    isSelectDialogue: boolean
} 

export interface DialoguesPresentationProps extends DialogueCount {
    allDialogues: ReactNode[],
    editUsers: Function,
    isSelectDialogues: boolean,
    dialoguesCount: { dialogue_id: number }[],
}