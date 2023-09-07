import { useState } from "react"

export const useProfileTab = () => {

    const [isOpenNotesTab, setOpenNotesTab] = useState(false);
    const [isOpenConsultationsTab, setOpenConsultationsTab] = useState(false);
    const [isOpenVideosTab, setOpenVideosTab] = useState(false);
    const [isOpenEventsTab, setOpenEventsTab] = useState(false);

    const openNotesTab = () => {
        setOpenNotesTab(true);
        setOpenConsultationsTab(false);
        setOpenVideosTab(false);
        setOpenEventsTab(false);
    }

    const openConsultationsTab = () => {
        setOpenNotesTab(false);
        setOpenConsultationsTab(true);
        setOpenVideosTab(false);
        setOpenEventsTab(false);
    }

    const openVideosTab = () => {
        setOpenNotesTab(false);
        setOpenConsultationsTab(false);
        setOpenVideosTab(true);
        setOpenEventsTab(false);
    }

    const openEventsTab = () => {
        setOpenNotesTab(false);
        setOpenConsultationsTab(false);
        setOpenVideosTab(false);
        setOpenEventsTab(true);
    }

    return {
        isOpenNotesTab,
        isOpenConsultationsTab,
        isOpenVideosTab,
        isOpenEventsTab,


        openNotesTab,
        openConsultationsTab,
        openVideosTab,
        openEventsTab
    }

}