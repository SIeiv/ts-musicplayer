import styles from "./LGPlayButton.module.scss"
import {FaPlay} from "react-icons/fa";

interface IProps {
    onClick: any
}

function LgPlayButton({onClick}: IProps) {
    return (
        <button className={styles.authorPlay} onClick={onClick}><FaPlay className={styles.icon}/>Слушать</button>
    );
}

export default LgPlayButton;