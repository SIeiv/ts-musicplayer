import styles from "./ItemOverlay.module.scss"
import RoundButton from "../RoundButton/RoundButton.tsx";
import {
    MdFavorite,
    MdFavoriteBorder,
    MdOutlinePushPin,
    MdPushPin
} from "react-icons/md";
import {FC} from "react";

interface IProps {
    btnControl: any
    onAPinClick: any
    onDPinClick: any

    addToFavorites: any
    removeFromFavorites: any
    objectEntity: any
}

const ItemOverlay: FC<IProps> = ({btnControl, addToFavorites, removeFromFavorites, onAPinClick, onDPinClick, objectEntity}) => (
    <div className={styles.buttons}>
        {btnControl()}
        <div className={styles.button}>
            {objectEntity.isPinned
                ? <RoundButton onClick={onDPinClick} icon={<MdPushPin/>}/>
                : <RoundButton onClick={onAPinClick} icon={<MdOutlinePushPin/>}/>
            }
        </div>
        <div className={styles.button}>
            {objectEntity.isFavorite
                ? <RoundButton onClick={removeFromFavorites} icon={<MdFavorite/>}/>
                : <RoundButton onClick={addToFavorites} icon={<MdFavoriteBorder/>}/>
            }
        </div>
    </div>
);

export default ItemOverlay;