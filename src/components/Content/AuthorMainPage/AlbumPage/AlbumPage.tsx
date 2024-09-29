import styles from "./AlbumPage.module.scss";
import {AlbumType} from "../../../../types/type.ts";
import Track from "../../../common/Track/Track.tsx";
import BackButton from "../../../common/BackButton/BackButton.tsx";
import RoundButton from "../../../common/RoundButton/RoundButton.tsx";
import {MdFavorite, MdFavoriteBorder, MdOutlinePushPin, MdPushPin} from "react-icons/md";
import {useAppDispatch} from "../../../../hooks.ts";
import {addAlbumToFavorites, addPin, deletePin, removeAlbumFromFavorites} from "../../../../redux/main.slice.ts";

interface IProps {
    albumEntity: AlbumType
    author: string
}

function AlbumPage({albumEntity, author}: IProps) {
    const dispatch = useAppDispatch();
    const trackEls = albumEntity.tracks.map((t, index) => <Track trackEntity={t} author={author}
                                                        queue={albumEntity.tracks} type={"numeric"} num={index + 1}/>)

    const onPinAClick = () => {
        dispatch(addPin({
            cover: albumEntity.cover,
            name: albumEntity.name,
            type: albumEntity.isSingle ? "single" : "album",
            id: albumEntity.id
        }))
    }
    const onPinDClick = () => {
        dispatch(deletePin({
            type: albumEntity.isSingle ? "single" : "album",
            id: albumEntity.id
        }))
    }

    const onFavAClick = () => {
        dispatch(addAlbumToFavorites(albumEntity.id));
    }
    const onFavDClick = () => {
        dispatch(removeAlbumFromFavorites(albumEntity.id));
    }


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
                    <div className={styles.buttons}>
                        <div className={styles.button}>
                            {albumEntity.isFavorite
                                ? <RoundButton onClick={onFavDClick} icon={<MdFavorite />}/>
                                : <RoundButton onClick={onFavAClick} icon={<MdFavoriteBorder />}/>
                            }
                        </div>
                        <div className={styles.button}>
                            {albumEntity.isPinned
                                ? <RoundButton onClick={onPinDClick} icon={<MdPushPin />}/>
                                : <RoundButton onClick={onPinAClick} icon={<MdOutlinePushPin />}/>
                            }
                        </div>
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