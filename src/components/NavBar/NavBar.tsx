import styles from "./NavBar.module.scss";
import NavBarButton from "./NavBarButton.tsx";
import {CgSearch} from "react-icons/cg";
import {PiMusicNotesBold} from "react-icons/pi";
import {MdFavorite} from "react-icons/md";
import PinnedItem from "./PinnedItem/PinnedItem.tsx";
import {useAppSelector} from "../../hooks.ts";

const NavBar = () => {
    const pins = useAppSelector(state => state.main.pins)

    const pinEls = pins.map(p => <PinnedItem cover={p.cover} name={p.name} type={p.type} path={p.path}/>)

    return (<div className={styles.navbar}>
            <div className={styles.buttons}>
                <NavBarButton name={"Поиск"} to={"/search"} icon={<CgSearch/>}/>
                <NavBarButton name={"Главная"} to={"/main"} icon={<PiMusicNotesBold/>}/>
                <NavBarButton name={"Коллекция"} to={"/favorites"} icon={<MdFavorite/>}/>
            </div>
            <div className={styles.pinsWrapper}>
                <div className={styles.pins}>
                    {pinEls}
                </div>
            </div>
        </div>
    )
};

export default NavBar;
