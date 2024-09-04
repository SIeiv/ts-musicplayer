import styles from "./Player.module.scss"
import missingTitle from "../../assets/Missing_Tile_BE3.png";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {MdSkipNext, MdSkipPrevious, MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled} from "react-icons/md";
import {
    audioPause,
    audioPlayNext,
    audioPlayPrev,
    audioResume, audioSwitchIsRandom, audioSwitchIsRepeating,
    changeAudioVolume,
    onScrollChange
} from "../../redux/main.slice.ts";
import {useEffect, useState} from "react";
import {IoMdVolumeHigh, IoMdVolumeOff} from "react-icons/io";
import {RxLoop} from "react-icons/rx";
import {LiaRandomSolid} from "react-icons/lia";

const Player = () => {
    const currentTrack = useAppSelector(state => state.main.audioState.currentTrack);
    const isPlaying = useAppSelector(state => state.main.audioState.isPlaying);
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

    function sToStr(s: any) {

        let m = Math.trunc(s / 60) + ''
        s = (s % 60) + ''
        return m.padStart(2, "0") + ':' + s.padStart(2, "0")
    }

    return (
        <div className={styles.player}>
            <div className={styles.player_left}>
                <div className={styles.player_left_icon}>
                    <img src={currentTrack.image ? currentTrack.image : missingTitle} alt=""/>
                </div>
                <div className={styles.player_left_text}>
                    <div className={styles.track_left_text_name}>{currentTrack.name ? currentTrack.name : "-"}</div>
                    <div className={styles.track_left_text_author}>{currentTrack.author ? currentTrack.author : "-"}</div>
                </div>
            </div>
            <div className={styles.player_center}>
                <div className={styles.player_center_buttons}>
                    <button style={{color: isRepeating ? "#E6E6E6" : "#888888"}}
                            onClick={() => {dispatch(audioSwitchIsRepeating())}}>
                        <RxLoop />
                    </button>
                    <button className={styles.prev} onClick={() => {dispatch(audioPlayPrev())}}><MdSkipPrevious/></button>
                    {isPlaying
                        ? <button onClick={() => {
                            dispatch(audioPause())
                        }} className={styles.player_center_buttons_play}><MdOutlinePauseCircleFilled/></button>
                        : <button onClick={() => {
                            dispatch(audioResume())
                        }} className={styles.player_center_buttons_play}><MdOutlinePlayCircleFilled/></button>}
                    <button className={styles.next} onClick={() => {dispatch(audioPlayNext())}}><MdSkipNext/></button>
                    <button style={{color: isRandom ? "#E6E6E6" : "#888888"}} onClick={() => {dispatch(audioSwitchIsRandom())}}>
                        <LiaRandomSolid />
                    </button>
                </div>
                <div className={styles.player_center_range}>
                    <span>{sToStr(Math.round(audioSource.currentTime))}</span>
                    <>
                        <input step={0.5} min={0} max={audioSource.duration} value={localTrackScrollValue}
                               onChange={OnScrollChange}
                               onMouseUp={OnScrollMouseUp} onMouseDown={OnScrollMouseDown} type="range"/>
                    </>
                    <span>{audioSource.duration ? sToStr(Math.round(audioSource.duration)) : "00:00" }</span>
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
