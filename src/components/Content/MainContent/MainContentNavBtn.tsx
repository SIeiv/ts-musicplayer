import styles from "../Content.module.scss"
import {NavLink} from "react-router-dom";

type PropsObj = {
    name: string
    to: string
    icon: any
}
const MainContentNavBtn = ({to, name, icon}: PropsObj) => (
    <div >
        <NavLink className={navData => navData.isActive ?
            styles.maincontentNavBtnActive : styles.maincontentNavBtn } to={to}>
            <span>{icon}</span>
            <span>{name}</span>
        </NavLink>
    </div>
);

export default MainContentNavBtn;
