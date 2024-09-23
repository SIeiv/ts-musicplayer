import styles from "./Album.module.scss";
import {NavLink} from "react-router-dom";
import {MdFavoriteBorder, MdOutlinePushPin} from "react-icons/md";
import {IoMdPlayCircle} from "react-icons/io";
import {audioPlay} from "../../../redux/main.slice.ts";
import {AlbumType, NewTrackType} from "../../../types/type.ts";
import {useAppDispatch} from "../../../hooks.ts";

interface IProps {
    AlbumEntity: AlbumType
    author: string
    queue?: Array<NewTrackType>
}

function Album({AlbumEntity: {cover, name, year, isSingle, tracks}, author}: IProps) {
    const dispatch = useAppDispatch();

    let temp_tracks = tracks.map(t => {
        return {...t, author};
    })

    const onPlayClick = () => {
        dispatch(audioPlay({
            src: temp_tracks[0].url,
            track: temp_tracks[0],
            queue: temp_tracks
        }))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}>
                <img src={cover} alt=""/>
                <NavLink to={`/${author.toLowerCase()}/${name.toLowerCase()}`} className={styles.overlay}>
                    <div className={styles.overlayWrap}>
                        <button onClick={onPlayClick}><IoMdPlayCircle/></button>
                        <div>
                            <button><MdOutlinePushPin/></button>
                            <button><MdFavoriteBorder/></button>
                        </div>
                    </div>

                </NavLink>
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