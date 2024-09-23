import styles from "./FavoriteButton.module.scss"
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {addTrackToFavoritePlaylist, removeTrackFromFavoritePlaylist} from "../../../redux/main.slice.ts";
import {useAppDispatch} from "../../../hooks.ts";
import {NewTrackType} from "../../../types/type.ts";

interface IProps {
    trackEntity: NewTrackType
    author: string
}

function FavoriteButton({trackEntity, author}: IProps) {
    const dispatch = useAppDispatch();

    let addTrackToFavorite = () => {
        dispatch(addTrackToFavoritePlaylist({
            trackId: trackEntity.id,
            authorName: author
        }));
    }
    let removeTrackFromFavorite = () => {
        dispatch(removeTrackFromFavoritePlaylist(trackEntity.id));
    }

    return (
        <div>
            {trackEntity.isFavorite
                ? <button className={styles.favoriteButton} onClick={removeTrackFromFavorite}>
                    <MdFavorite />
                </button>
                : <button className={styles.favoriteButton} onClick={addTrackToFavorite}>
                    <MdFavoriteBorder/>
                </button>}

        </div>
    );
}

export default FavoriteButton;