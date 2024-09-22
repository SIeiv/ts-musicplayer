import styles from "./FavoritesContent.module.scss"
import {useAppSelector} from "../../../hooks.ts";
import Track from "../../common/Track/Track.tsx";
import favoritesCover from "../../../assets/playlist-cover_like.png";
import Collection from "../../common/Collection/Collection.tsx";

function FavoritesContent() {
    const favoriteTracks = useAppSelector(state => state.main.favoritePlaylist)

    let queue = [];
    let tracks = favoriteTracks.map((t, index) => {
        if (index <= 7) {
            queue.push(t);
            return <Track trackEntity={t} queue={queue} author={t.author}/>
        }
    });

    return (
        <div>
            <div className={styles.title}>
                Коллекция
            </div>
            <div className={styles.content}>
                <Collection to={"/favorite_playlist"} text={"Мне нравится"}
                            counter={tracks.length} counterName={"треков"} img={favoritesCover}/>
                <div className={styles.tracksPreview}>
                    {tracks}
                </div>
            </div>
        </div>
    );
}

export default FavoritesContent;