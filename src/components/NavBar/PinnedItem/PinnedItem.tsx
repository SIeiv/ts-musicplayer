import styles from "./PinnedItem.module.scss";
import {NavLink} from "react-router-dom";

interface IProps {
    cover: string
    name: string
    type: string
    path?: string
}

function PinnedItem({name, type, cover, path}: IProps) {

    let pinType = "undefined";

    if (type === "author") {
        pinType = "Артист";
    } else if (type === "album") {
        pinType = "Альбом";
    } else if (type === "single") {
        pinType = "Сингл";
    } else if (type === "playlist") {
        pinType = "Плейлист";
    }

    return (
        <NavLink to={path ? path : `/${name.toLowerCase()}`} className={styles.main}>
            <img className={styles.cover} src={cover} alt=""/>
            <div className={styles.textArea}>
                <div className={styles.name}>{name}</div>
                <div className={styles.type}>{pinType}</div>
            </div>
        </NavLink>
    );
}

export default PinnedItem;