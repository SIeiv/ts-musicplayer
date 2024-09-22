import BackButton from "../../../common/BackButton/BackButton.tsx";
import styles from "./FamiliarTracks.module.scss"
import {NewTrackType} from "../../../../types/type.ts";
import Track from "../../../common/Track/Track.tsx";

interface IProps {
    familiarTracks: Array<NewTrackType>
    author: string
}

function FamiliarTracks({familiarTracks, author}: IProps) {

    let trackEl = familiarTracks.map(t => <Track trackEntity={t} author={author} queue={familiarTracks}/>)

    return (
        <div>
            <div className={styles.header}>
                <BackButton/>
                <div className={styles.title}>
                    Знакомое вам
                </div>
            </div>
            <div>
                {trackEl}
            </div>
        </div>
    );
}

export default FamiliarTracks;