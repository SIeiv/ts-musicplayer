import styles from "./SmartRow.module.scss"
import {useEffect, useState} from "react";
import {useWindowSize} from "../../../hooks.ts";

interface IProps {
    items: Array<JSX.Element>
}

function SmartRow({items}: IProps) {
    const [albumPreviewItems, setAlbumPreviewItems] = useState(6);

    const [width, height] = useWindowSize();

    useEffect(() => {
        setAlbumPreviewItems((width - 245) / 235 - 1);
    }, [width])

    const itemsPreview = items.map((e, i) => i < albumPreviewItems && e);

    return (
        <div className={styles.albumsEls}>
            {itemsPreview}
        </div>
    );
}

export default SmartRow;