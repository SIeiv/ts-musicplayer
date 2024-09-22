import favoritesCover from "../../../assets/playlist-cover_like.png";
import styles from "./FavoritePlaylist.module.scss";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import Track from "../../common/Track/Track.tsx";
import {audioPlay} from "../../../redux/main.slice.ts";
import {TrackType} from "../../../types/type.ts";
import {FaPlay} from "react-icons/fa";
import SearchField from "../../common/SearchField/SearchField.tsx";
import {useState} from "react";
import SearchNotFound from "../../common/SearchNotFound/SearchNotFound.tsx";

function FavoritePlaylist() {
    const favoriteTracks = useAppSelector(state => state.main.favoritePlaylist)
    const dispatch = useAppDispatch();

    let queue: Array<TrackType> = [];

    const [searchInput, setSearchInput] = useState("");

    /*favoriteTracks.forEach(t => {
        if (searchInput === "/all" || (t.name.toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== "")) {
            trackElements.push(<Track trackEntity={t} queue={trackEntities}/>);
            trackEntities.push(t);
        }
    });
*/

    let tracks: any = [];

    favoriteTracks.forEach((t) => {
        if (searchInput === "") {
            queue.push(t);
            tracks.push(<Track classname={styles.track} trackEntity={t} queue={queue}/>);
        } else if ((t.name!.toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== "")) {
            queue.push(t);
            tracks.push(<Track classname={styles.track} trackEntity={t} queue={queue}/>);
        }

    });

    const onSearchChange = (e: any) => {
        setSearchInput(e.target.value);

    }

    return (
        <div>
            <div className={styles.playlistHeader}>
                <img src={favoritesCover} alt=""/>
                <div className={styles.headerMain}>
                    <div>
                        <div className={styles.playlist}>Плейлист</div>
                        <div className={styles.playlistTitle}>Мне нравится</div>
                        <div className={styles.playlistAuthor}>local_user</div>
                    </div>
                    <div>
                        <button className={styles.playlistPlay} onClick={() => {
                            dispatch(audioPlay({
                                src: queue[0].url,
                                track: queue[0],
                                queue: queue}))
                        }}><FaPlay className={styles.icon}/>Слушать</button>
                    </div>
                </div>
            </div>
            <div className={styles.search}>
                <SearchField searchInput={searchInput} onSearchChange={onSearchChange} placeholder={"Поиск трека"}/>
            </div>

            <div className={styles.trackList}>
                {tracks.length === 0 && searchInput !== "" ? <SearchNotFound/> : tracks}
            </div>
        </div>
    );
}

export default FavoritePlaylist;