
import { ProfileTabConsultation } from "../../../widgets/profile/tabs/consultation";
import { ProfileTabEvents } from "../../../widgets/profile/tabs/events";
import { ProfileTabNotes } from "../../../widgets/profile/tabs/notes";
import { ProfileTabVideos } from "../../../widgets/profile/tabs/videos";
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