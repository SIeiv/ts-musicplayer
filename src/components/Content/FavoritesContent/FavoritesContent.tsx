import styles from "./FavoritesContent.module.scss"
import {useAppSelector} from "../../../hooks.ts";
import Track from "../../common/Track/Track.tsx";
import favoritesCover from "../../../assets/playlist-cover_like.png";
import Collection from "../../common/Collection/Collection.tsx";
import CustomNavLink from "../../common/CustomNavLink/CustomNavLink.tsx";
import {Route, Routes} from "react-router-dom";
import Author from "../../common/Author/Author.tsx";
import {AlbumType, AuthorType} from "../../../types/type.ts";
import Album from "../../common/Album/Album.tsx";
import PageOfItems from "../../common/PageOfItems/PageOfItems.tsx";

function FavoritesContent() {
    const favoriteTracks = useAppSelector(state => state.main.favoritePlaylist);
    const favoriteAuthors = useAppSelector(state => state.main.favoriteAuthors);
    const favoriteAlbums = useAppSelector(state => state.main.favoriteAlbums);

    let queue = [];
    let tracks = favoriteTracks.map((t, index) => {
        if (index <= 7) {
            queue.push(t);
            return <Track trackEntity={t} queue={queue} author={t.author!}/>
        }
    });

    let authors = favoriteAuthors.map((author: AuthorType) => {
        return <div className={styles.author}><Author authorEntity={author}/></div>
    });
    let albums = favoriteAlbums.map((album: AlbumType) => {
        return <div className={styles.author}><Album AlbumEntity={album} author={album.tracks[0].author!}/></div>
    });


    return (
        <div>
            <Routes>
                <Route path={"authors"} element={<PageOfItems items={authors} title={"Любимые исполнители"}/>}/>
                <Route path={"albums"} element={<PageOfItems items={albums} title={"Любимые альбомы"}/>}/>
                <Route path={""} element={<div>
                    <div className={styles.title}>
                        Коллекция
                    </div>
                    <div className={styles.content}>
                        {tracks.length === 0 && favoriteAlbums.length === 0 && favoriteAuthors.length === 0
                            && <div className={styles.empty}>Лайкните что-нибудь и оно появится здесь</div>}
                        {tracks.length
                            ? <div>
                                <Collection to={"/мне нравится"} text={"Мне нравится"}
                                            counter={tracks.length} counterName={"треков"} img={favoritesCover}/>
                                <div className={styles.tracksPreview}>
                                    {tracks}
                                </div>
                            </div>
                            : <div></div>
                        }

                        {favoriteAlbums.length
                            ? <div className={styles.favoriteAlbums}>
                                <div className={styles.title}>
                                    <CustomNavLink text={"Любимые альбомы"} to={"albums"}/>
                                </div>
                                <div className={styles.albums}>
                                    {albums}
                                </div>
                            </div>
                            : <div></div>
                        }
                        {favoriteAuthors.length
                            ? <div className={styles.favoriteAuthors}>
                                <div className={styles.title}>
                                    <CustomNavLink text={"Любимые исполнители"} to={"authors"}/>
                                </div>
                                <div className={styles.authors}>
                                    {authors}
                                </div>
                            </div>
                            : <div></div>
                        }
                    </div>
                </div>}/>
            </Routes>
        </div>
    );
}

export default FavoritesContent;