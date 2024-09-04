import {CgSearch} from "react-icons/cg";
import style from "./SearchNotFound.module.scss";

function SearchNotFound() {
    return (
        <div className={style.main}>
            <div className={style.icon}><CgSearch/></div>
            <div className={style.t1}>Ничего не нашли</div>
            <div className={style.t2}>Попробуйте написать по-другому</div>
        </div>
    );
}

export default SearchNotFound;