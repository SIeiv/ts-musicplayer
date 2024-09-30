import styles from "./Player.module.scss"
import missingTitle from "../../assets/Missing_Tile_BE3.png";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {MdSkipNext, MdSkipPrevious} from "react-icons/md";
import {
    audioPlayNext,
    audioPlayPrev, audioSwitchIsRandom, audioSwitchIsRepeating,
    changeAudioVolume, myVibeNext,
    onScrollChange
} from "../../redux/main.slice.ts";
import {useEffect, useState} from "react";
import {IoMdVolumeHigh, IoMdVolumeOff} from "react-icons/io";
import {LiaRandomSolid} from "react-icons/lia";
import {LuRepeat, LuRepeat1} from "react-icons/lu";
import FavoriteButton from "../common/FavoriteButton/FavoriteButton.tsx";
import {NavLink} from "react-router-dom";
import PlayButton from "../common/PlayButton/PlayButton.tsx";
import Time from "../common/Time/Time.tsx";

const Player = () => {
    const currentTrack = useAppSelector(state => state.main.audioState.currentTrack);
    const isPlaying = useAppSelector(state => state.main.audioState.isPlaying);
    const isMyVibePlaying = useAppSelector(state => state.main.audioState.isMyVibePlaying);
    const isRepeating = useAppSelector(state => state.main.audioState.isRepeating);
    const isRandom = useAppSelector(state => state.main.audioState.isRandom);
    const audioSource = useAppSelector(state => state.main.audioState.source)
    const dispatch = useAppDispatch();

    const [localTrackScrollValue, setLocalTrackScrollValue] = useState(0);
    const [tempVolume, setTempVolume] = useState(0);

    const [isScrolling, setIsScrolling] = useState(false);


    const OnScrollChange = (e: any) => {
        setLocalTrackScrollValue(e.target.value);
    }
    const OnScrollMouseUp = (e: any) => {
        dispatch(onScrollChange(e.target.value));
        setIsScrolling(false);
    }
    const OnScrollMouseDown = () => {
        setIsScrolling(true);
    }

    const OnVolumeChange = (e: any) => {
        dispatch(changeAudioVolume(e.target.value));
    }
    const ToggleVolume = () => {
        if (audioSource.volume !== 0) {
            setTempVolume(audioSource.volume);
            dispatch(changeAudioVolume(0));
        } else {
            dispatch(changeAudioVolume(tempVolume));
        }
    }

    let interval: any;
    useEffect(() => {
        if (isScrolling) {
            clearInterval(interval);
        } else {
            interval = setInterval(() => setLocalTrackScrollValue(audioSource.currentTime), 0.5);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isScrolling]);

    return (
        <div className={styles.player}>
            <div className={styles.player_left}>
                <div className={styles.player_left_icon}>
                    <img src={currentTrack.cover ? currentTrack.cover : missingTitle} alt=""/>
                </div>
                <div className={styles.player_left_text}>
                    <div>
                        <NavLink to={`/${currentTrack.author!.toLowerCase()}/${currentTrack.album!.toLowerCase()}`} className={styles.track_left_text_name}>{currentTrack.name ? currentTrack.name : "-"}</NavLink>
                    </div>
                    {!currentTrack.author
                        ? <div className={styles.track_left_text_author}>-</div>
                        : <NavLink to={`/${currentTrack.author.toLowerCase()}`} className={styles.track_left_text_author}>{currentTrack.author}</NavLink>}
                </div>
                <div className={styles.favoriteButton}>
                    <FavoriteButton trackEntity={currentTrack} author={currentTrack.author!}/>
                </div>
            </div>
            <div className={styles.player_center}>
                <div className={styles.player_center_buttons}>
                    <button style={{color: isRepeating ? "#E6E6E6" : "#888888"}}
                            onClick={() => {dispatch(audioSwitchIsRepeating())}}>
                        {isRepeating === 2 ? <LuRepeat1 /> : <LuRepeat />}
                    </button>
                    <button className={styles.prev} onClick={() => {dispatch(audioPlayPrev())}}><MdSkipPrevious/></button>
                    <PlayButton requirement={isPlaying || isMyVibePlaying}/>
                    <button className={styles.next} onClick={() => {
                        if (isPlaying) {
                            dispatch(audioPlayNext());
                        } else if (isMyVibePlaying) {
                            dispatch(myVibeNext());
                        }
                    }}><MdSkipNext/></button>
                    <button style={{color: isRandom ? "#E6E6E6" : "#888888"}} onClick={() => {dispatch(audioSwitchIsRandom())}}>
                        <LiaRandomSolid />
                    </button>
                </div>
                <div className={styles.player_center_range}>
                    <Time time={audioSource.currentTime}/>
                    <>
                        <input step={0.5} min={0} max={audioSource.duration} value={localTrackScrollValue}
                               onChange={OnScrollChange}
                               onMouseUp={OnScrollMouseUp} onMouseDown={OnScrollMouseDown} type="range"/>
                    </>
                    {audioSource.duration ? <Time time={audioSource.duration}/> : <span>00:00</span> }
                </div>
            </div>
            <div className={styles.player_right}>
                <div className={styles.player_right_button}>
                    <button onClick={ToggleVolume}>
                        {audioSource.volume !== 0 ? <IoMdVolumeHigh/> : <IoMdVolumeOff/>}
                    </button>
                </div>
                <div className={styles.player_right_range}>
                    <input max={1} step={0.01} type="range" value={audioSource.volume} onChange={OnVolumeChange}/>
                </div>
            </div>
        </div>
    );
};

export default Player;
