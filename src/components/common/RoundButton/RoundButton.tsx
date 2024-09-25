import styles from "./RoundButton.module.scss";

interface IProps {
    onClick: any
    icon: JSX.Element
}

function RoundButton({onClick, icon}: IProps) {
    return (
        <button className={styles.button} onClick={onClick}>{icon}</button>
    );
}

export default RoundButton;