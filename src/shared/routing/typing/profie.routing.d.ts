export interface ProfileTab {
    isOpenNotesTab: boolean,
    isOpenConsultationsTab: boolean,
    isOpenVideosTab: boolean,
    isOpenEventsTab: boolean
}

export interface ProfileTabContentRoutingProps {
    profileTab: ProfileTab
}