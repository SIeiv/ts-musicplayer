import BackButton from "../../../common/BackButton/BackButton.tsx";
import styles from "./AuthorAlbums.module.scss";
import {AlbumType, NewTrackType} from "../../../../types/type.ts";
import Album from "../../../common/Album/Album.tsx";

interface IProps {
    authorAlbums: Array<AlbumType>
    authorName: string
    queue?: Array<NewTrackType>
}

function AuthorAlbums({authorAlbums, authorName}: IProps) {

    const albumEls = authorAlbums.map(a => <Album AlbumEntity={a} author={authorName}/>)

    return (
        <div>
            <div className={styles.header}>
                <BackButton/>
                <div className={styles.albums}>
                    Альбомы
                </div>
            </div>
            <div className={styles.albumElements}>
                {albumEls}
            </div>
        </div>
    );
}

export default AuthorAlbums;