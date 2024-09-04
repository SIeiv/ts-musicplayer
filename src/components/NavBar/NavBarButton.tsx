import styles from "./NavBar.module.scss";
import {NavLink} from "react-router-dom";

type PropsObj = {
    name: string
    to: string
    icon: any
}

const NavBarButton = ({name, to, icon}: PropsObj) => (
    <div>
        <NavLink className={navData => navData.isActive ? styles.activebutton : styles.button} to={to}>
            <span className={styles.icon}>{icon}</span><span>{name}</span>
        </NavLink>
    </div>
);

export default NavBarButton;
