import styles from "./BackButton.module.scss";
import {IoIosArrowBack} from "react-icons/io";
import {NavLink} from "react-router-dom";

function BackButton() {
    return (
        <NavLink className={styles.back} to={"../"}><IoIosArrowBack /></NavLink>
    );
}

export default BackButton;