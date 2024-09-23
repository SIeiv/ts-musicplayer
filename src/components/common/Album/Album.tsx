import styles from "./Album.module.scss";
import {NavLink} from "react-router-dom";
import {MdFavoriteBorder, MdOutlinePushPin} from "react-icons/md";
import {IoMdPlayCircle} from "react-icons/io";
import {audioPlay} from "../../../redux/main.slice.ts";
import {AlbumType} from "../../../types/type.ts";
import {useAppDispatch} from "../../../hooks.ts";
import {useEffect} from "react";

interface IProps {
    AlbumEntity: AlbumType
    author: string
}

function Album({AlbumEntity: {cover, name, year, isSingle, tracks, id}, author}: IProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        tracks.forEach(t => {t.author = author})
    }, [])

    const onPlayClick = () => {
        dispatch(audioPlay({
            src: tracks[0].url,
            track: tracks[0],
            queue: tracks,
        }))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}>
                <img src={cover} alt=""/>
                <div className={styles.overlay}>
                    <div className={styles.overlayWrap}>
                        <button onClick={onPlayClick}><IoMdPlayCircle/></button>
                        <div>
                            <button><MdOutlinePushPin/></button>
                            <button><MdFavoriteBorder/></button>
                        </div>
                    </div>

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