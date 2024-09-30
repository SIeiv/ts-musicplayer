import favoritesCover from "../../../assets/playlist-cover_like.png";
import styles from "./FavoritePlaylist.module.scss";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import Track from "../../common/Track/Track.tsx";
import {addPin, audioPlay, deletePin} from "../../../redux/main.slice.ts";
import {NewTrackType} from "../../../types/type.ts";
import {FaPlay} from "react-icons/fa";
import SearchField from "../../common/SearchField/SearchField.tsx";
import {useState} from "react";
import SearchNotFound from "../../common/SearchNotFound/SearchNotFound.tsx";
import RoundButton from "../../common/RoundButton/RoundButton.tsx";
import {MdOutlinePushPin, MdPushPin} from "react-icons/md";
import LGPlayButton from "../../common/LGPlayButton/LGPlayButton.tsx";

function FavoritePlaylist() {
    const favoriteTracks = useAppSelector(state => state.main.favoritePlaylist);
    const favoritesIsPinned = useAppSelector(state => state.main.favoritePlaylistIsPinned)
    const dispatch = useAppDispatch();

    let queue: Array<NewTrackType> = [];

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
            tracks.push(<Track trackEntity={t} queue={queue} author={t.author!}/>);
        } else if ((t.name!.toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== "")) {
            queue.push(t);
            tracks.push(<Track trackEntity={t} queue={queue} author={t.author!}/>);
        }

    });

    const onSearchChange = (e: any) => {
        setSearchInput(e.target.value);

    }
    const onAPinClick = () => {
        dispatch(addPin({
            cover: favoritesCover,
            name: "Мне нравится",
            type: "playlist",
            id: 0
        }))
    };
    const onDPinClick = () => {
        dispatch(deletePin({
            id: 0,
            type: "playlist",
        }));
    };

    const onPlayClick = () => {
        dispatch(audioPlay({
            src: queue[0].url,
            track: queue[0],
            queue: queue
            }))
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
                    <div className={styles.buttons}>
                        <div className={styles.playButton}>
                            <LGPlayButton onClick={onPlayClick}/>
                        </div>
                        <div className={styles.pin}>
                            {favoritesIsPinned
                                ? <RoundButton onClick={onDPinClick} icon={<MdPushPin />}/>
                                : <RoundButton onClick={onAPinClick} icon={<MdOutlinePushPin />}/>
                            }
                        </div>

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