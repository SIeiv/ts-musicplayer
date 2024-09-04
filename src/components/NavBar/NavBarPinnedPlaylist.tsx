import styles from "./NavBar.module.scss";
import {NavLink} from "react-router-dom";

type PropsObj = {
    name: string
    to: string
    cover: any
}

const NavBarPinnedPlaylist = ({name, to, cover}: PropsObj) => (
    <div>
        <NavLink className={styles.button} to={to}>
            <span className={styles.cover}>{cover}</span>
            <div>
                <div>{name}</div>
                <div>Плейлист</div>
            </div>

        </NavLink>
    </div>
);

export default NavBarPinnedPlaylist;
