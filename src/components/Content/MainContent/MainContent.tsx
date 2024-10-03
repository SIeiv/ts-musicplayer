import styles from "./MainContent.module.scss"
import {FaPlay} from "react-icons/fa";
import myVibeFX from "../../../assets/mv-black.mp4"
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {myVibeNext, myVibePlay} from "../../../redux/main.slice.ts";
import {FaPause} from "react-icons/fa";
import {createRef, useEffect, useRef} from "react";
import CustomNavLink from "../../common/CustomNavLink/CustomNavLink.tsx";
import {AlbumType, AuthorType, NewTrackType} from "../../../types/type.ts";
import Author from "../../common/Author/Author.tsx";
import Album from "../../common/Album/Album.tsx";
import Track from "../../common/Track/Track.tsx";

const MainContent = () => {
    const dispatch = useAppDispatch();
    const audioEntity = useAppSelector(state => state.main.audioState.source);
    const isMyVibePlaying = useAppSelector(state => state.main.audioState.isMyVibeActive)
    const isPlaying = useAppSelector(state => state.main.audioState.isPlaying);
    const data = useAppSelector(state => state.main.mainData);

    let authors: Array<any> = [];
    let albums: Array<any> = [];
    let tracks: Array<any> = [];

    const videoRef: React.RefObject<HTMLVideoElement> = createRef();

    data.forEach(author => {
        authors.push(<Author authorEntity={author}/>);
        author.albums.forEach(album => {
            albums.push(<Album AlbumEntity={album} author={author.name}/>);
            album.tracks.forEach(track => {
                tracks.push(<Track trackEntity={track} author={author.name} queue={album.tracks}/>);
            })
        })
    })

    useEffect(() => {

    }, [])

    useEffect(() => {
        videoRef.current!.playbackRate = isMyVibePlaying && isPlaying ? 1 : 0.6;
    }, [isPlaying, isMyVibePlaying])

    const onPlayClick = () => {
        dispatch(myVibePlay());
        audioEntity.onended = () => {
            dispatch(myVibeNext());
        };
    }

    return (
        <div className={styles.maincontent}>
            <div className={styles.maincontentMyVibe}>
                <video ref={videoRef} onCanPlay={() => {videoRef.current!.playbackRate = 0.6}} loop className={styles.maincontentMyVibeFX} autoPlay muted>
                    <source src={myVibeFX}/>
                </video>
                <button className={styles.myVibeButton} onClick={onPlayClick}>
                    {isMyVibePlaying && isPlaying
                        ? <FaPause className={styles.icon}/>
                        : <FaPlay className={styles.icon}/>
                    }
                    Моя волна
                </button>
            </div>
            <div className={styles.allContent}>
                <div className={styles.element}>
                    <CustomNavLink text={"Исполнители"} to={""}/>
                    <div className={styles.flex}>
                        {authors}
                    </div>
                </div>
                <div className={styles.element}>
                    <CustomNavLink text={"Альбомы"} to={""}/>
                    <div className={styles.flex}>
                        {albums}
                    </div>
                </div>
                <div className={styles.element}>
                    <CustomNavLink text={"Треки"} to={""}/>
                    <div>
                        {tracks}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainContent;
