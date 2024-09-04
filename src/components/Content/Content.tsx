import styles from "./Content.module.scss"
import {Route, Routes} from "react-router-dom";
import MainContent from "./MainContent/MainContent.tsx";
import ContentSearch from "./ContentSearch/ContentSearch.tsx";

const Content = () => (
    <div className={styles.content}>

        <div className={styles.contentWrapper}>
            <Routes>
                <Route path={"/search"} element={<ContentSearch/>}/>
                <Route path={"/main/*"} element={<MainContent/>}/>
                <Route path={"/podcasts"} element={<MainContent/>}/>
                <Route path={"/favorite"} element={<MainContent/>}/>
            </Routes>
        </div>
    </div>
);

export default Content;
