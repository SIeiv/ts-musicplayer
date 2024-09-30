import {useEffect, useState} from "react";
import styles from "./PlayingAnimation.module.scss";

function PlayingAnimation() {
    const [toggler, setToggler] = useState(true);

    useEffect(() => {
        setInterval(() => {setToggler(false)}, 300);
        setInterval(() => {setToggler(true)}, 600);
    }, [])


    return (
        <div>
            <div className={toggler ? styles.max : styles.min}></div>
        </div>
    );
}

export default PlayingAnimation;