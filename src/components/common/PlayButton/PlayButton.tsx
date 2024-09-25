import styles from "./PlayButton.module.scss"
import {audioPause, audioResume} from "../../../redux/main.slice.ts";
import {MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled} from "react-icons/md";
import {useAppDispatch} from "../../../hooks.ts";

interface IProps {
    requirement: boolean
}

function PlayButton({requirement}: IProps) {
    const dispatch = useAppDispatch();
    return (
        <div className={styles.main}>
            {requirement ? <button onClick={() => {
                dispatch(audioPause())
            }} className={styles.player_center_buttons_play}><MdOutlinePauseCircleFilled/></button>
            : <button onClick={() => {
                dispatch(audioResume())
            }} className={styles.player_center_buttons_play}><MdOutlinePlayCircleFilled/></button>}
        </div>

    );
}

export default PlayButton;