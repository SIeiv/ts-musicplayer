import styles from "../../Content.module.scss"
import MainContentForYouFHBtn from "./MainContentForYouFHBtn.tsx";

const MainContentForYou = () => (
    <div className={styles.maincontentForYou}>
        <MainContentForYouFHBtn type={"favourites"}/>
        <MainContentForYouFHBtn type={"history"}/>
    </div>
);

export default MainContentForYou;
