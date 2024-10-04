import type {TypedUseSelectorHook} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./redux/store.ts";
import {useEffect, useState} from "react";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const resizeHandler = () => setSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return size;
};