import styles from "./../Content.module.scss";
import mainStyles from "./ContentSearch.module.scss";
import {useAppSelector} from "../../../hooks.ts";
import {useState} from "react";
import Track from "../../common/Track/Track.tsx";
import SearchNotFound from "../../common/SearchNotFound/SearchNotFound.tsx";
import {NewTrackType} from "../../../types/type.ts";
import SearchField from "../../common/SearchField/SearchField.tsx";
import {getAllTracks} from "../../../helpers/helpers.ts";
import SearchCategoryButton from "./SearchCategoryButton/SearchCategoryButton.tsx";
import Album from "../../common/Album/Album.tsx";
import Author from "../../common/Author/Author.tsx";

const ContentSearch = () => {
    const mainData = useAppSelector(state => state.main.mainData);
    const [searchInput, setSearchInput] = useState("");

    const [searchType , setSearchType] = useState("track");

    let trackElements: Array<any> = [];
    let trackEntities: Array<NewTrackType> = [];

    let albumElements: Array<JSX.Element> = [];

    let authorElements: Array<JSX.Element> = [];

    if (searchType === "track") {
        const tracks = getAllTracks(mainData);

        tracks.forEach(t => {
            if (searchInput === "/all" || (t.name!.toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== "")) {
                trackElements.push(<Track trackEntity={t} queue={trackEntities} author={t.author!}/>);
                trackEntities.push(t);
            }
        });
    } else if (searchType === "album") {
        mainData.forEach(author => {
            author.albums.forEach(t => {
                if (searchInput === "/all" || (t.name!.toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== "")) {
                    albumElements.push(<Album AlbumEntity={t} author={author.name}/>)
                }
            })
        })
    } else if (searchType === "author") {
        mainData.forEach(t => {
            if (searchInput === "/all" || (t.name!.toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== "")) {
                authorElements.push(<Author authorEntity={t}/>)
            }
        })
    }

    const onSearchChange = (e: any) => {
        setSearchInput(e.target.value);
    }

    return (
        <div className={styles.contentSearch}>
            <SearchField searchInput={searchInput} onSearchChange={onSearchChange} placeholder={"Трек, альбом, исполнитель"}/>
            <div className={mainStyles.buttons}>
                <SearchCategoryButton text={"Треки"}
                                      requirement={searchType === "track"}
                                      onClick={() => {setSearchType("track")}}/>
                <SearchCategoryButton text={"Альбомы"}
                                      requirement={searchType === "album"}
                                      onClick={() => {setSearchType("album")}}/>
                <SearchCategoryButton text={"Исполнители"}
                                      requirement={searchType === "author"}
                                      onClick={() => {setSearchType("author")}}/>
            </div>
            <div>
                {!(trackElements.length === 0 && searchInput !== "") && trackElements}
                <div className={mainStyles.flex} >
                    {!(albumElements.length === 0 && searchInput !== "") && albumElements}
                </div>
                <div className={mainStyles.flex}>
                    {!(authorElements.length === 0 && searchInput !== "") && authorElements}
                </div>
                {trackElements.length === 0 && albumElements.length === 0 && authorElements.length === 0 && searchInput !== ""
                && <SearchNotFound/>}
            </div>
        </div>
    );

};

export default ContentSearch;
