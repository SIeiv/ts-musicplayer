import styles from "./Track.module.scss";
import missingTitle from "../../../assets/Missing_Tile_BE3.png";
import {MdFavoriteBorder, MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled} from "react-icons/md";
import {IoHeartDislikeOutline} from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {audioPause, audioPlay, audioPlayNext, audioResume} from "../../../redux/main.slice.ts";
import {useState} from "react";

const Track = ({trackEntity, queue}: any) => {
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
                }} className={styles.track_left_icon_pp}>
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
                        queue: queue
                    }));
                    audioEntity.onended = () => {dispatch(audioPlayNext())};
                    setIsTouched(true);
                }
            }} className={styles.track_left_icon_pp}>
                <MdOutlinePlayCircleFilled/>
            </button>
        );
    }

    return (
        <div className={styles.track}>
            <div className={styles.track_left}>
                <div className={styles.track_left_icon}>
                    <img src={trackEntity.image ? trackEntity.image : missingTitle} alt=""/>
                    {btnControl()}
                </div>
                <div className={styles.track_left_text}>
                    <div className={styles.track_left_text_name}>{trackEntity.name}</div>
                    <div>{trackEntity.author}</div>
                </div>
            </div>
            <div className={styles.track_right}>
                <div>
                    <MdFavoriteBorder/>
                </div>
                <div>
                    <IoHeartDislikeOutline/>
                </div>
                <div>
                    <div>00:00</div>
                </div>
            </div>

        </div>
    );
};

export default Track;
