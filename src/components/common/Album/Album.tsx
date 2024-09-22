import styles from "./Album.module.scss";
import {NavLink} from "react-router-dom";

interface IProps {
    cover: string
    title: string
    author: string
    year: string
    isSingle?: boolean
}

function Album({cover, title, author, year, isSingle = false}: IProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}>
                <img src={cover} alt=""/>
                <div className={styles.overlay}>
                    <div className={styles.overlayWrap}>
                        <button>play</button>
                        <div>
                            <button>pin</button>
                            <button>like</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.description}>
                <div>
                    <NavLink to={""} className={styles.title}>{title}</NavLink>
                </div>
                <div>
                    <NavLink to={`/${author.toLowerCase()}`} className={styles.author}>{author}</NavLink>
                </div>
                <div className={styles.year}>{isSingle ? `${year} · Сингл` : year}</div>
            </div>
        </div>
    );
}

export default Album;