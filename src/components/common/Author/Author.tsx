import styles from "./Author.module.scss";
import {NavLink} from "react-router-dom";

interface IProps {
    authorName: string
    authorAvatar: string
}

function Author({authorName, authorAvatar}: IProps) {
    return (
        <div className={styles.main}>
            <div className={styles.avatar}>
                <img src={authorAvatar} alt=""/>
                <div className={styles.overlay}>
                    <NavLink to={`/${authorName.toLowerCase()}`} className={styles.nav}>
                        авролвадр
                    </NavLink>
                    <div className={styles.overlayButtons}>
                        <button>play</button>
                        <button>pin</button>
                        <button>to_favorites</button>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <NavLink to={`/${authorName.toLowerCase()}`} className={styles.authorName}>
                    {authorName}
                </NavLink>
                <div className={styles.defaultText}>
                    Исполнитель
                </div>
            </div>
        </div>
    );
}

export default Author;