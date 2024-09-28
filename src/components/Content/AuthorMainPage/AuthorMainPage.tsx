import styles from "./AuthorMainPage.module.scss";
import favoritesCover from "../../../assets/playlist-cover_like.png";
import {FaPlay} from "react-icons/fa";
import {AlbumType, AuthorType, NewTrackType} from "../../../types/type.ts";
import CustomNavLink from "../../common/CustomNavLink/CustomNavLink.tsx";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import Track from "../../common/Track/Track.tsx";
import Collection from "../../common/Collection/Collection.tsx";
import Album from "../../common/Album/Album.tsx";
import {Route, Routes} from "react-router-dom";
import AuthorTracks from "./AuthorTracks/AuthorTracks.tsx";
import FamiliarTracks from "./FamiliarTracks/FamiliarTracks.tsx";
import {
    addAuthorToFavorites,
    addPin,
    audioPlay,
    deletePin,
    removeAuthorFromFavorites
} from "../../../redux/main.slice.ts";
import AuthorAlbums from "./AuthorAlbums/AuthorAlbums.tsx";
import AlbumPage from "./AlbumPage/AlbumPage.tsx";
import RoundButton from "../../common/RoundButton/RoundButton.tsx";
import {MdFavorite, MdFavoriteBorder, MdOutlinePushPin, MdPushPin} from "react-icons/md";

interface IProps {
    authorEntity: AuthorType
}

function AuthorMainPage({authorEntity}: IProps) {
    const mainData = useAppSelector(state => state.main.mainData);
    const dispatch = useAppDispatch();

    let authorTracks: Array<NewTrackType> = [];
    let authorAlbums: Array<AlbumType> = [];
    let favoriteTracks: Array<NewTrackType> = [];

    mainData.forEach(author => {
        if (author.id === authorEntity.id) {
            author.albums.forEach(album => {
                authorAlbums.push(album);
                album.tracks.forEach(track => {
                    authorTracks.push({...track, author: authorEntity.name});
                })
            })
        }
    })

    let trackEls: Array<JSX.Element> = [];
    authorTracks.forEach(e => {
        if (trackEls.length <= 7) {
            trackEls.push(<Track trackEntity={e} author={authorEntity.name} queue={authorTracks}/>);
        }
        if (e.isFavorite) {
            favoriteTracks.push(e);
        }
    })

    let AlbumEls = authorAlbums.map(e => <Album author={authorEntity.name} AlbumEntity={e} queue={authorTracks}/>);

    const onPlayClick = () => {
        dispatch(audioPlay({
            src: authorTracks[0].url,
            track: authorTracks[0],
            queue: authorTracks
        }))
    };

    const authorToFavorites = () => {
        dispatch(addAuthorToFavorites(authorEntity.id))
    };
    const removeFromFavorites = () => {
        dispatch(removeAuthorFromFavorites(authorEntity.id))
    };

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

    let albumRoutes: Array<any> = [];

    authorEntity.albums.forEach(album => {
        albumRoutes.push(<Route path={`/${album.name.toLowerCase()}`} element={<AlbumPage albumEntity={album}
                                                                                          author={authorEntity.name}/>}/>)
    })

    return (
        <div>
            <Routes>
                <Route path={"/tracks"} element={<AuthorTracks authorTracks={authorTracks} author={authorEntity.name}/>}/>
                <Route path={"/familiar"} element={<FamiliarTracks familiarTracks={favoriteTracks} author={authorEntity.name}/>}/>
                <Route path={"/albums"} element={<AuthorAlbums authorAlbums={authorAlbums} authorName={authorEntity.name}/>}/>
                {albumRoutes}
                <Route path={""} element={<div><div className={styles.header}>
                    <img src={authorEntity.avatar} alt=""/>
                    <div className={styles.headerMain}>
                        <div>
                            <div className={styles.author}>Исполнитель</div>
                            <div className={styles.authorName}>{authorEntity.name}</div>
                            <div className={styles.listeners}>1488</div>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.authorPlay} onClick={onPlayClick}><FaPlay className={styles.icon}/>Слушать</button>
                            <div className={styles.favoriteButton}>
                                {authorEntity.isFavorite
                                        ? <RoundButton onClick={removeFromFavorites} icon={<MdFavorite />}/>
                                        : <RoundButton onClick={authorToFavorites} icon={<MdFavoriteBorder />}/>
                                }
                            </div>
                            <div className={styles.favoriteButton}>
                                {authorEntity.isPinned
                                    ? <RoundButton onClick={onDPinClick} icon={<MdPushPin />}/>
                                    : <RoundButton onClick={onAPinClick} icon={<MdOutlinePushPin />}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={styles.tracks}>
                        <div className={styles.customNav}>
                            <CustomNavLink text={"Популярные треки"} to={"tracks"}/>
                        </div>
                        <div className={styles.trackElements}>
                            {trackEls}
                        </div>

                    </div>
                    <div>
                        <Collection to={"familiar"} text={"Знакомое вам"} counter={favoriteTracks.length} counterName={"треков"}
                                    img={favoritesCover}/>
                    </div>
                    <div className={styles.albums}>
                        <div className={styles.nav}>
                            <CustomNavLink text={"Альбомы"} to={"albums"}/>
                        </div>
                        <div className={styles.albumsEls}>
                            {AlbumEls}
                        </div>
                    </div></div>}/>
            </Routes>

        </div>
    );
}

export default AuthorMainPage;