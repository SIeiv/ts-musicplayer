import styles from "./Collection.module.scss"
import CustomNavLink from "../CustomNavLink/CustomNavLink.tsx";

interface IProps {
    to: string
    text: string
    counter: number
    counterName: string
    img: string
}

function Collection({to, text, counter, counterName, img}: IProps) {
    return (
        <div className={styles.favoritesMain}>
            <img src={img} alt=""/>
            <div className={styles.main}>
                <CustomNavLink to={to} text={text}/>
                <div className={styles.tracksCount}>{counter} {counterName}</div>
            </div>
        </div>
    );
}

export default Collection;