import styles from "./Author.module.scss";
import {NavLink} from "react-router-dom";
import PlayButton from "../PlayButton/PlayButton.tsx";
import {AuthorType} from "../../../types/type.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import RoundButton from "../RoundButton/RoundButton.tsx";
import {MdFavorite, MdFavoriteBorder, MdOutlinePushPin} from "react-icons/md";
import {addAuthorToFavorites, removeAuthorFromFavorites} from "../../../redux/main.slice.ts";

interface IProps {
    authorEntity: AuthorType
}

function Author({authorEntity}: IProps) {
    const audioState = useAppSelector(state => state.main.audioState);
    const dispatch = useAppDispatch();

    let isPlaying = authorEntity.name === audioState.currentTrack.author && audioState.isPlaying;
    const authorToFavorites = () => {
        dispatch(addAuthorToFavorites(authorEntity.id))
    }
    const removeFromFavorites = () => {
        dispatch(removeAuthorFromFavorites(authorEntity.id))
    }

    return (
        <div className={styles.main}>
            <div className={styles.avatar}>
                <img src={authorEntity.avatar} alt=""/>
                <NavLink to={`/${authorEntity.name.toLowerCase()}`} className={styles.nav}/>
                <div className={styles.buttons}>
                    <PlayButton requirement={isPlaying}/>
                    <div className={styles.button}>
                        <RoundButton onClick={() => {}} icon={<MdOutlinePushPin />}/>
                    </div>
                    <div className={styles.button}>
                        {authorEntity.isFavorite
                            ? <RoundButton onClick={removeFromFavorites} icon={<MdFavorite />}/>
                            : <RoundButton onClick={authorToFavorites} icon={<MdFavoriteBorder />}/>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <NavLink to={`/${authorEntity.name.toLowerCase()}`} className={styles.authorName}>
                    {authorEntity.name}
                </NavLink>
                <div className={styles.defaultText}>
                    Исполнитель
                </div>
            </div>
        </div>
    );
}

export default Author;