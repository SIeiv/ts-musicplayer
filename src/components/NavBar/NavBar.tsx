import styles from "./NavBar.module.scss";
import NavBarButton from "./NavBarButton.tsx";
import {CgSearch} from "react-icons/cg";
import {PiMusicNotesBold} from "react-icons/pi";
import {MdFavorite, MdOutlinePodcasts} from "react-icons/md";
//import NavBarPinnedPlaylist from "./NavBarPinnedPlaylist.tsx";

const NavBar = () => (
    <div className={styles.navbar}>
        <div className={styles.buttons}>
            <NavBarButton name={"Поиск"} to={"/search"} icon={<CgSearch/>}/>
            <NavBarButton name={"Главная"} to={"/main/fy"} icon={<PiMusicNotesBold />}/>
            <NavBarButton name={"Подкасты"} to={"/podcasts"} icon={<MdOutlinePodcasts />}/>
            <NavBarButton name={"Коллекции"} to={"/favorite"} icon={<MdFavorite />}/>
        </div>
        <div className={styles.pins}>
            {/*<NavBarPinnedPlaylist name={"Мне нравится"} to={"/"} cover={""}/>*/}
        </div>
    </div>
);

export default NavBar;
