import styles from "./Album.module.scss";
import {NavLink} from "react-router-dom";
import {
    MdOutlinePauseCircleFilled,
    MdOutlinePlayCircleFilled,
} from "react-icons/md";
import {
    addAlbumToFavorites,
    addPin,
    audioPause,
    audioPlay,
    audioPlayNext,
    audioResume,
    deletePin, removeAlbumFromFavorites,
} from "../../../redux/main.slice.ts";
import {AlbumType, NewTrackType} from "../../../types/type.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import ItemOverlay from "../ItemOverlay/ItemOverlay.tsx";
import {useState} from "react";

interface IProps {
    AlbumEntity: AlbumType
    author: string
    queue?: Array<NewTrackType>
}

function Album({AlbumEntity: {cover, name, year, isSingle, tracks}, author, AlbumEntity}: IProps) {
    const dispatch = useAppDispatch();
    const isAudioPlaying = useAppSelector(state => state.main.audioState.isPlaying);
    const [isTouched, setIsTouched] = useState(false);
    const audioEntity = useAppSelector(state => state.main.audioState.source);

    const addToFavorites = () => {
        dispatch(addAlbumToFavorites(AlbumEntity.id))
    }
    const removeFromFavorites = () => {
        dispatch(removeAlbumFromFavorites(AlbumEntity.id))
    }

    let queue: Array<NewTrackType> = [];

    tracks.forEach(track => {
        queue.push(track);
    })

    let btnControl = () => {
        if (isAudioPlaying) {
            return (
                <button onClick={() => {
                    dispatch(audioPause());
                }} className={styles.playButton}>
                    <MdOutlinePauseCircleFilled/>
                </button>
            );
        }
        return (
            <button onClick={() => {
                if (isTouched) {
                    dispatch(audioResume());
                } else {
                    dispatch(audioPlay({
                        src: tracks[0].url,
                        track: tracks[0],
                        queue: queue,
                    }));
                    audioEntity.onended = () => {
                        dispatch(audioPlayNext())
                    };
                    setIsTouched(true);
                }
            }} className={styles.playButton}>
                <MdOutlinePlayCircleFilled/>
            </button>
        );
    }

    const onAPinClick = () => {
        dispatch(addPin({
            cover: AlbumEntity.cover,
            name: AlbumEntity.name,
            type: isSingle ? "single" : "album",
            id: AlbumEntity.id
        }))
    };
    const onDPinClick = () => {
        dispatch(deletePin({
            id: AlbumEntity.id,
            type: isSingle ? "single" : "album"
        }))
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}>
                <img src={cover} alt=""/>
                <NavLink to={`/${author.toLowerCase()}/${name.toLowerCase()}`} className={styles.overlay}></NavLink>
                <div className={styles.buttons}>
                    <ItemOverlay btnControl={btnControl} onAPinClick={onAPinClick} onDPinClick={onDPinClick}
                                 addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}
                                 objectEntity={AlbumEntity}/>
                </div>
            </div>
            <div className={styles.description}>
                <div>
                    <NavLink to={""} className={styles.title}>{name}</NavLink>
                </div>
                <div>
                    <NavLink to={`/${author.toLowerCase()}`} className={styles.author}>{author}</NavLink>
                </div>
                <div className={styles.year}>{isSingle ? `${year} · Сингл` : year}</div>
            </div>
        </div>
    );
}

export default Album;