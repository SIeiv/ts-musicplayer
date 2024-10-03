import styles from "./PageOfItems.module.scss"
import BackButton from "../BackButton/BackButton.tsx";

interface IProps {
    items: Array<JSX.Element>
    title: string
    isTracks?: boolean
}

function PageOfItems({items, title, isTracks = false}: IProps) {

    return (
        <div>
            <div className={styles.header}>
                <BackButton/>
                <div className={styles.title}>
                    {title}
                </div>
            </div>
            <div className={isTracks ? "" : styles.items}>
                {items}
            </div>
        </div>
    );
}

export default PageOfItems;