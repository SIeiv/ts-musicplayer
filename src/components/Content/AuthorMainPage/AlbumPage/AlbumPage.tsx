import styles from "./AlbumPage.module.scss";
import {AlbumType} from "../../../../types/type.ts";
import Track from "../../../common/Track/Track.tsx";
import BackButton from "../../../common/BackButton/BackButton.tsx";

interface IProps {
    albumEntity: AlbumType
    author: string
}

function AlbumPage({albumEntity, author}: IProps) {

    const trackEls = albumEntity.tracks.map(t => <Track trackEntity={t} author={author} queue={albumEntity.tracks}/>)

    return (
        <div>
            <div className={styles.backButton}>
                <BackButton/>
            </div>
            <div className={styles.header}>
                <img src={albumEntity.cover} alt=""/>
                <div className={styles.description}>
                    <div>
                        <div className={styles.album}>{albumEntity.isSingle ? "Сингл" : "Альбом"}</div>
                        <div className={styles.albumName}>{albumEntity.name}</div>
                        <div className={styles.author}>{author} - {albumEntity.year}</div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div>
                {trackEls}
            </div>
        </div>
    );
}

export default AlbumPage;