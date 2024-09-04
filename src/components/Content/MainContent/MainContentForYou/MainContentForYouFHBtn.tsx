import styles from "../../Content.module.scss"
import {NavLink} from "react-router-dom";

type PropsObj = {
    type: "favourites" | "history"
}

const MainContentForYouFHBtn = ({type}: PropsObj) => (
    <div className={styles.maincontentForYouFHBtn}>
        {type === "favourites"
            ? <NavLink to={"/favourites"}>
                Мне нравится
            </NavLink>
            : <NavLink to={"/history"}>
                История
            </NavLink>}
    </div>
);

export default MainContentForYouFHBtn;
