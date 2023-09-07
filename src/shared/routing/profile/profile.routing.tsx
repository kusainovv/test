import { ProfileTabConsultation } from "../../components/profile/tabs/consultation"
import { ProfileTabEvents } from "../../components/profile/tabs/events"
import { ProfileTabNotes } from "../../components/profile/tabs/notes"
import { ProfileTabVideos } from "../../components/profile/tabs/videos"
import { ProfileTabContentRoutingProps } from "../typing/profie.routing"

export const ProfileTabContentRouting = (props: ProfileTabContentRoutingProps) => {
    const { profileTab } = props;

    if (profileTab.isOpenNotesTab) {
        return <ProfileTabNotes />
    }

    if (profileTab.isOpenConsultationsTab) {
        return <ProfileTabConsultation />
    }

    if (profileTab.isOpenVideosTab) {
        return <ProfileTabVideos />
    }

    if (profileTab.isOpenEventsTab) {
        return <ProfileTabEvents />
    }

    return <></>
}