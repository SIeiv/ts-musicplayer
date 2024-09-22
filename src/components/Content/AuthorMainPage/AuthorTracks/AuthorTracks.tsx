import styles from "./AuthorTracks.module.scss"
import {NewTrackType} from "../../../../types/type.ts";
import Track from "../../../common/Track/Track.tsx";
import BackButton from "../../../common/BackButton/BackButton.tsx";

interface IProps {
    authorTracks: Array<NewTrackType>
    author: string
}
function AuthorTracks({authorTracks, author}: IProps) {

    let trackEls = authorTracks.map(e => <Track trackEntity={e} author={author} queue={authorTracks}/>)

    return (
        <div>
            <div className={styles.header}>
                <BackButton/>
                <div className={styles.tracks}>
                    Треки
                </div>
            </div>
            <div>
                {trackEls}
            </div>
        </div>
    );
}

export default AuthorTracks;