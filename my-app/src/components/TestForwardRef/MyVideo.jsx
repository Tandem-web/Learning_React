import { forwardRef } from "react";

const MyVideo = forwardRef((props, ref) => {
    const {src, type} = props;

    return (
        <>
            <video src={src} ref={ref} loop={true}>
                <source src={src} type={type}/>
            </video>
        </>
    )
})


export default MyVideo;