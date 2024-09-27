import styles from "./FavoritesContent.module.scss"
import {useAppSelector} from "../../../hooks.ts";
import Track from "../../common/Track/Track.tsx";
import favoritesCover from "../../../assets/playlist-cover_like.png";
import Collection from "../../common/Collection/Collection.tsx";
import CustomNavLink from "../../common/CustomNavLink/CustomNavLink.tsx";
import {Route, Routes} from "react-router-dom";
import BackButton from "../../common/BackButton/BackButton.tsx";
import Author from "../../common/Author/Author.tsx";
import {AuthorType} from "../../../types/type.ts";

function FavoritesContent() {
    const favoriteTracks = useAppSelector(state => state.main.favoritePlaylist);
    const favoriteAuthors = useAppSelector(state => state.main.favoriteAuthors);

    let queue = [];
    let tracks = favoriteTracks.map((t, index) => {
        if (index <= 7) {
            queue.push(t);
            return <Track trackEntity={t} queue={queue} author={t.author!}/>
        }
    });

    let authors = favoriteAuthors.map((author: AuthorType) => {
        return <Author authorEntity={author}/>
    })

    return (
        <div>
            <Routes>
                <Route path={"authors"} element={<div><BackButton/></div>}/>
                <Route path={""} element={<div>
                    <div className={styles.title}>
                        Коллекция
                    </div>
                    <div className={styles.content}>
                        <div>
                            <Collection to={"/favorite_playlist"} text={"Мне нравится"}
                                        counter={tracks.length} counterName={"треков"} img={favoritesCover}/>
                            <div className={styles.tracksPreview}>
                                {tracks}
                            </div>
                        </div>
                        <div className={styles.favoriteAuthors}>
                            <CustomNavLink text={"Любимые исполнители"} to={"authors"}/>
                            <div className={styles.authors}>
                                {authors}
                            </div>
                        </div>
                    </div>
                </div>}/>
            </Routes>
        </div>
    );
}

export default FavoritesContent;