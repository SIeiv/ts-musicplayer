import styles from "./SearchCategoryButton.module.scss";

interface IProps {
    text: string
    onClick?: any
    requirement: boolean
}

function SearchCategoryButton({text, onClick, requirement}: IProps) {
    return (
        <button className={requirement ? styles.activeButton : styles.button} onClick={onClick}>{text}</button>
    );
}

export default SearchCategoryButton;