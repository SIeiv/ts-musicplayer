import styles from "./../Content.module.scss";
import {useAppSelector} from "../../../hooks.ts";
import {useState} from "react";
import Track from "../../common/Track/Track.tsx";
import SearchNotFound from "../../common/SearchNotFound/SearchNotFound.tsx";
import {TrackType} from "../../../types/type.ts";
import SearchField from "../../common/SearchField/SearchField.tsx";

const ContentSearch = () => {
    const tracks = useAppSelector(state => state.main.allTracks);
    const [searchInput, setSearchInput] = useState("");

    let trackElements: Array<any> = [];
    let trackEntities: Array<TrackType> = [];

    tracks.forEach(t => {
        if (searchInput === "/all" || (t.name.toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== "")) {
            trackElements.push(<Track trackEntity={t} queue={trackEntities}/>);
            trackEntities.push(t);
        }
    });

    const onSearchChange = (e: any) => {
        setSearchInput(e.target.value);
    }

    return (
        <div className={styles.contentSearch}>
            <SearchField searchInput={searchInput} onSearchChange={onSearchChange} placeholder={"Трек, альбом, исполнитель"}/>
            {/*<div>
                <div tabIndex={0} className={styles.contentSearch_search}>
                    <CiSearch className={styles.contentSearch_search_icon}/>
                    <input value={searchInput} onChange={onSearchChange} placeholder={"Трек, альбом, исполнитель"} type="text"/>
                </div>
            </div>*/}
            <div>
                {trackElements.length === 0 && searchInput !== "" ? <SearchNotFound/> : trackElements}
            </div>
        </div>
    );

};

export default ContentSearch;
