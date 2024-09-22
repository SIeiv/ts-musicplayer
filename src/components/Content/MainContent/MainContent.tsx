import styles from "../Content.module.scss"
import {FaPlay} from "react-icons/fa";
import myVibeFX from "../../../assets/mv-black.mp4"
import MainContentNavBtn from "./MainContentNavBtn.tsx";
import {Route, Routes} from "react-router-dom";
import MainContentForYou from "./MainContentForYou/MainContentForYou.tsx";
import {useAppDispatch} from "../../../hooks.ts";
import {myVibePlay} from "../../../redux/main.slice.ts";

const MainContent = () => {
    const dispatch = useAppDispatch();

    return (
    <div className={styles.maincontent}>
        <div className={styles.maincontentMyVibe}>
            <video autoPlay loop className={styles.maincontentMyVibeFX} muted>
                <source src={myVibeFX}/>
            </video>
            <button onClick={() => {dispatch(myVibePlay())}}>
                <FaPlay />
                Моя волна
            </button>
        </div>
        <div className={styles.maincontentNavBtns}>
            <MainContentNavBtn name={"Для вас"} to={"fy"} icon={""}/>
            <MainContentNavBtn name={"Тренды"} to={"trends"} icon={""}/>
            <MainContentNavBtn name={"Фонк"} to={"phonk"} icon={""}/>
        </div>
        <div>
            <Routes>
                <Route path={"/fy"} element={<MainContentForYou/>}/>
            </Routes>
        </div>
    </div>
)};

export default MainContent;
