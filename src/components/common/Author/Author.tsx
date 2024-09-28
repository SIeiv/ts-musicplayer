import styles from "./Author.module.scss";
import {NavLink} from "react-router-dom";
import {AuthorType, NewTrackType} from "../../../types/type.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import RoundButton from "../RoundButton/RoundButton.tsx";
import {
    MdFavorite,
    MdFavoriteBorder,
    MdOutlinePauseCircleFilled,
    MdOutlinePlayCircleFilled,
    MdOutlinePushPin, MdPushPin
} from "react-icons/md";
import {
    addAuthorToFavorites, addPin,
    audioPause,
    audioPlay, audioPlayNext,
    audioResume, deletePin,
    removeAuthorFromFavorites
} from "../../../redux/main.slice.ts";
import {useState} from "react";

interface IProps {
    authorEntity: AuthorType
}

function Author({authorEntity}: IProps) {
    const isAudioPlaying = useAppSelector(state => state.main.audioState.isPlaying);
    const audioEntity = useAppSelector(state => state.main.audioState.source);
    const dispatch = useAppDispatch();
    const authorToFavorites = () => {
        dispatch(addAuthorToFavorites(authorEntity.id))
    }
    const removeFromFavorites = () => {
        dispatch(removeAuthorFromFavorites(authorEntity.id))
    }

    const [isTouched, setIsTouched] = useState(false);

    let queue: Array<NewTrackType> = [];

    authorEntity.albums.forEach(album => {
        album.tracks.forEach(track => {
            queue.push(track);
        })
    })

    const onAPinClick = () => {
        dispatch(addPin({
            cover: authorEntity.avatar,
            name: authorEntity.name,
            type: "author",
            id: authorEntity.id
        }))
    };
    const onDPinClick = () => {
        dispatch(deletePin({
            id: authorEntity.id,
            type: "author"
        }))
    };

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
                        src: authorEntity.albums[0].tracks[0].url,
                        track: authorEntity.albums[0].tracks[0],
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

    return (
        <div className={styles.main}>
            <div className={styles.avatar}>
                <img src={authorEntity.avatar} alt=""/>
                <NavLink to={`/${authorEntity.name.toLowerCase()}`} className={styles.nav}/>
                <div className={styles.buttons}>
                    {btnControl()}
                    <div className={styles.button}>
                        {authorEntity.isPinned
                            ? <RoundButton onClick={onDPinClick} icon={<MdPushPin />}/>
                            : <RoundButton onClick={onAPinClick} icon={<MdOutlinePushPin />}/>
                        }
                    </div>
                    <div className={styles.button}>
                        {authorEntity.isFavorite
                            ? <RoundButton onClick={removeFromFavorites} icon={<MdFavorite />}/>
                            : <RoundButton onClick={authorToFavorites} icon={<MdFavoriteBorder />}/>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <NavLink to={`/${authorEntity.name.toLowerCase()}`} className={styles.authorName}>
                    {authorEntity.name}
                </NavLink>
                <div className={styles.defaultText}>
                    Исполнитель
                </div>
            </div>
        </div>
    );
}

export default Author;