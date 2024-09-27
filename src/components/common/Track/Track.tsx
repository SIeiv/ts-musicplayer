import styles from "./Track.module.scss";
import missingTitle from "../../../assets/Missing_Tile_BE3.png";
import {MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled} from "react-icons/md";
//import {IoHeartDislikeOutline} from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {
    audioPause,
    audioPlay,
    audioPlayNext,
    audioResume
} from "../../../redux/main.slice.ts";
import {useState} from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.tsx";
import {AuthorType, NewTrackType} from "../../../types/type.ts";
import {NavLink} from "react-router-dom";

interface IProps {
    trackEntity: NewTrackType
    author: string
    queue: any[]
    type?: "default" | "numeric"
    num?: number
}

const Track = ({trackEntity, author, queue, type = "default", num}: IProps) => {
    const dispatch = useAppDispatch();
    const isAudioPlaying = useAppSelector(state => state.main.audioState.isPlaying);
    const audioEntity = useAppSelector(state => state.main.audioState.source);
    const currentTrack = useAppSelector(state => state.main.audioState.currentTrack);
    const [isTouched, setIsTouched] = useState(false);

    let btnControl = () => {
        if (currentTrack.id === trackEntity.id && isAudioPlaying) {
            return (
                <button onClick={() => {
                    dispatch(audioPause());
                }} className={styles.track_left_icon_pp_mod}>
                    <MdOutlinePauseCircleFilled/>
                </button>
            );
        }
        return (
            <button onClick={() => {
                if (currentTrack.id === trackEntity.id && isTouched) {
                    dispatch(audioResume());
                } else {
                    dispatch(audioPlay({
                        src: trackEntity.url,
                        track: trackEntity,
                        queue: queue,
                        author: author
                    }));
                    audioEntity.onended = () => {
                        dispatch(audioPlayNext())
                    };
                    setIsTouched(true);
                }
            }} className={styles.track_left_icon_pp}>
                <MdOutlinePlayCircleFilled/>
            </button>
        );
    }

    let isPlayingAnimation = () => {
        if (currentTrack.id === trackEntity.id && isAudioPlaying) {
            return (
                <div className={styles.track_left_icon_anim}>
                    p
                </div>
            );
        }
    }

    return (
        <div className={styles.track}>
            <div className={styles.track_left}>
                <div className={styles.track_left_icon}>
                    {type === "default"
                        ? <img className={styles.img} src={trackEntity.cover ? trackEntity.cover : missingTitle} alt=""/>
                        : <div className={styles.img}>{num}</div>
                    }
                    {isPlayingAnimation()}
                    {btnControl()}
                </div>
                <div className={styles.track_left_text}>
                    <div>
                        <div className={styles.track_left_text_name}>{trackEntity.name}</div>
                    </div>
                    <div>
                        {type === "default"
                            && <NavLink className={styles.track_left_text_author}
                                       to={`/${trackEntity.author?.toLowerCase()}`}>{author}</NavLink>
                        }

                    </div>
                </div>
            </div>
            <div className={styles.track_right}>
                <div className={styles.favorite}>
                    <FavoriteButton trackEntity={trackEntity} author={trackEntity.author!}/>
                </div>
                <div className={styles.duration}>
                    <div>00:00</div>
                </div>
            </div>

        </div>
    );
};

export default Track;
