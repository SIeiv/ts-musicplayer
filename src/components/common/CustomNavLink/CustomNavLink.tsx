import styles from "./CustomNavLink.module.scss";
import {IoIosArrowForward} from "react-icons/io";
import {NavLink} from "react-router-dom";

interface IProps {
    text: string
    to: string
}

function CustomNavLink({text = "text_sample", to}: IProps) {
    return (
        <NavLink className={styles.button} to={to}>
            <span>{text}</span>
            <IoIosArrowForward className={styles.arrow} />
        </NavLink>
    );
}

export default CustomNavLink;