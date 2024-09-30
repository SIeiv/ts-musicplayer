function Time(props: any) {
    function sToStr(s: any) {

        let m = Math.trunc(s / 60) + ''
        s = (s % 60) + ''
        return m.padStart(2, "0") + ':' + s.padStart(2, "0")
    }

    return (
        <span>{sToStr(Math.round(props.time))}</span>
    );
}

export default Time;