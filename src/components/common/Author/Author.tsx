import styles from "./Author.module.scss";
import {NavLink} from "react-router-dom";
import {AuthorType, NewTrackType} from "../../../types/type.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {MdOutlinePlayCircleFilled} from "react-icons/md";
import {
    addAuthorToFavorites, addPin, audioPlay, audioPlayNext, deletePin,
    removeAuthorFromFavorites
} from "../../../redux/main.slice.ts";
import ItemOverlay from "../ItemOverlay/ItemOverlay.tsx";

interface IProps {
    authorEntity: AuthorType
}

function Author({authorEntity}: IProps) {
    const dispatch = useAppDispatch();
    const audioEntity = useAppSelector(state => state.main.audioState.source);
    const authorToFavorites = () => {
        dispatch(addAuthorToFavorites(authorEntity.id))
    }
    const removeFromFavorites = () => {
        dispatch(removeAuthorFromFavorites(authorEntity.id))
    }

    let queue: Array<NewTrackType> = [];

    authorEntity.albums.forEach(album => {
        album.tracks.forEach(track => {
            queue.push(track);
        })
    })

    let btnControl = () => {
        return (
            <button onClick={() => {
                dispatch(audioPlay({
                    src: authorEntity.albums[0].tracks[0].url,
                    track: authorEntity.albums[0].tracks[0],
                    queue: queue,
                }));
                audioEntity.onended = () => {
                    dispatch(audioPlayNext())
                };

            }} className={styles.playButton}>
                <MdOutlinePlayCircleFilled/>
            </button>
        );
    }

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

    return (
        <div className={styles.main}>
            <div className={styles.avatar}>
                <img src={authorEntity.avatar} alt=""/>
                <NavLink to={`/${authorEntity.name.toLowerCase()}`} className={styles.nav}/>
                <div className={styles.buttons}>
                    <ItemOverlay onAPinClick={onAPinClick} onDPinClick={onDPinClick} btnControl={btnControl}
                                 objectEntity={authorEntity}
                                 addToFavorites={authorToFavorites} removeFromFavorites={removeFromFavorites}/>
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