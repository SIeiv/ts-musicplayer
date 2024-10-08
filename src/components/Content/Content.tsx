import styles from "./Content.module.scss"
import {Route, Routes} from "react-router-dom";
import MainContent from "./MainContent/MainContent.tsx";
import ContentSearch from "./ContentSearch/ContentSearch.tsx";
import FavoritesContent from "./FavoritesContent/FavoritesContent.tsx";
import FavoritePlaylist from "./FavoritePlaylist/FavoritePlaylist.tsx";
import {useAppSelector} from "../../hooks.ts";
import AuthorMainPage from "./AuthorMainPage/AuthorMainPage.tsx";

const Content = () => {
    const data = useAppSelector(state => state.main.mainData);


    let routes: Array<any> = []

    data.forEach(author => {
        let albumRoutes: Array<any> = [];

        author.albums.forEach(album => {
            albumRoutes.push(<Route path={`${album.name.toLowerCase()}`}/>)
        })

        routes.push(
            <Route path={`/${author.name.toLowerCase()}`}
                           element={<AuthorMainPage authorEntity={author}/>}>
            <Route path={"tracks"} element={<div></div>}/>
            <Route path={"familiar"} element={<div></div>}/>
            <Route path={"albums"} element={<div></div>}/>
                {albumRoutes}
        </Route>
        );
    })

    return (
        <div className={styles.content}>
            <div className={styles.contentWrapper}>
                <Routes>
                    <Route path={"/search"} element={<ContentSearch/>}/>
                    <Route path={"/"} element={<MainContent/>}>
                        <Route path={"authors"}/>
                        <Route path={"albums"}/>
                        <Route path={"tracks"}/>
                    </Route>
                    <Route path={"/podcasts"} element={<MainContent/>}/>
                    <Route path={"/favorites"} element={<FavoritesContent/>}>
                        <Route path={"authors"}/>
                        <Route path={"albums"}/>
                    </Route>
                    <Route path={"/мне нравится"} element={<FavoritePlaylist/>}/>
                    {routes}
                </Routes>
            </div>
        </div>
    )
};

export default Content;
