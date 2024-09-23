import styles from "./../Content.module.scss";
import {useAppSelector} from "../../../hooks.ts";
import {useState} from "react";
import Track from "../../common/Track/Track.tsx";
import SearchNotFound from "../../common/SearchNotFound/SearchNotFound.tsx";
import {NewTrackType} from "../../../types/type.ts";
import SearchField from "../../common/SearchField/SearchField.tsx";
import {getAllTracks} from "../../../helpers/helpers.ts";

const ContentSearch = () => {
    const mainData = useAppSelector(state => state.main.mainData);
    const [searchInput, setSearchInput] = useState("");

    const tracks = getAllTracks(mainData);

    let trackElements: Array<any> = [];
    let trackEntities: Array<NewTrackType> = [];

    tracks.forEach(t => {
        if (searchInput === "/all" || (t.name!.toLowerCase().includes(searchInput.toLowerCase()) && searchInput !== "")) {
            trackElements.push(<Track trackEntity={t} queue={trackEntities} author={t.author!}/>);
            trackEntities.push(t);
        }
    });

    const onSearchChange = (e: any) => {
        setSearchInput(e.target.value);
    }

    return (
        <div className={styles.contentSearch}>
            <SearchField searchInput={searchInput} onSearchChange={onSearchChange} placeholder={"Трек, альбом, исполнитель"}/>
            <div>
                {trackElements.length === 0 && searchInput !== "" ? <SearchNotFound/> : trackElements}
            </div>
        </div>
    );

};

export default ContentSearch;
