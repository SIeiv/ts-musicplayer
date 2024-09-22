import {CiSearch} from "react-icons/ci";
import styles from "./SearchField.module.scss";

interface IProps {
    searchInput: string
    onSearchChange: any
    placeholder: string
}

function SearchField({searchInput, onSearchChange, placeholder}: IProps) {
    return (
        <div>
            <div tabIndex={0} className={styles.contentSearch_search}>
                <CiSearch className={styles.contentSearch_search_icon}/>
                <input value={searchInput} onChange={onSearchChange} placeholder={placeholder} type="text"/>
            </div>
        </div>
    );
}

export default SearchField;