import styles from "./MainContent.module.scss"
import {FaPlay} from "react-icons/fa";
import myVibeFX from "../../../assets/mv-black.mp4"
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {audioPause, audioResume, myVibeNext, myVibePlay} from "../../../redux/main.slice.ts";
import {FaPause} from "react-icons/fa";
import {createRef, useEffect} from "react";
import CustomNavLink from "../../common/CustomNavLink/CustomNavLink.tsx";
import Author from "../../common/Author/Author.tsx";
import Album from "../../common/Album/Album.tsx";
import Track from "../../common/Track/Track.tsx";
import {Route, Routes} from "react-router-dom";
import PageOfItems from "../../common/PageOfItems/PageOfItems.tsx";
import SearchCategoryButton from "../ContentSearch/SearchCategoryButton/SearchCategoryButton.tsx";

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
        authors.push(<div className={styles.author}><Author authorEntity={author}/></div>);
        author.albums.forEach(album => {
            albums.push(<Album AlbumEntity={album} author={author.name}/>);
            album.tracks.forEach(track => {
                tracks.push(<Track trackEntity={track} author={author.name} queue={album.tracks}/>);
            })
        })
    })

    const previewTracks = tracks.map((t, i) => i < 10 && t)

    useEffect(() => {
        videoRef.current!.playbackRate = isMyVibePlaying && isPlaying ? 1 : 0.6;
    }, [isPlaying, isMyVibePlaying])

    const onPlayClick = () => {
        if (isPlaying && isMyVibePlaying) {
            dispatch(audioPause());
        } else if (!isPlaying && isMyVibePlaying) {
            dispatch(audioResume());
        } else {
            dispatch(myVibePlay());
        }
        audioEntity.onended = () => {
            dispatch(myVibeNext());
        };
    }

    return (
        <div>
            <Routes>
                <Route path={"/authors"} element={<PageOfItems items={authors} title={"Все исполнители"}/>}/>
                <Route path={"/albums"} element={<PageOfItems items={albums} title={"Все альбомы"}/>}/>
                <Route path={"/tracks"} element={<PageOfItems items={tracks} title={"Все треки"} isTracks={true}/>}/>
                <Route path={""} element={<div><div className={styles.maincontent}>
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
                    <div>
                        <SearchCategoryButton text={"Обзор"} requirement={true}/>
                    </div>
                    <div className={styles.allContent}>
                        <div className={styles.element}>
                            <div className={styles.nav}>
                                <CustomNavLink text={"Исполнители"} to={"authors"}/>
                            </div>
                            <div className={styles.flex}>
                                {authors}
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.nav}>
                                <CustomNavLink text={"Альбомы"} to={"albums"}/>
                            </div>
                            <div className={styles.flex}>
                                {albums}
                            </div>
                        </div>
                        <div className={styles.element}>
                            <div className={styles.nav}>
                                <CustomNavLink text={"Треки"} to={"tracks"}/>
                            </div>
                            <div>
                                {previewTracks}
                            </div>
                        </div>
                    </div>
                </div></div>}/>
            </Routes>
        </div>
    )
};

export default MainContent;
