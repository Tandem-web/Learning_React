import { FaPause, FaPlay } from 'react-icons/fa6';
import './TestForwardRef.css'
import { useEffect, useRef, useState } from 'react';
import MyVideo from './MyVideo';

function TestForwardRef() {
    const [isPlay, setIsPlay] = useState(false);
    const videoPlayerRef = useRef(null);

    const handlerClick = () => {
        setIsPlay(!isPlay);
    }

    useEffect(()=>{
        if(isPlay){
            videoPlayerRef.current.play();
        }else{
            videoPlayerRef.current.pause();
        }
    }, [isPlay])

    return (
        <div className='testForwardRev-container'>
            <div className='videoPlayer-controls-container'>
                <div className='videoPlayer-controls-button' onClick={handlerClick}>
                    {
                        isPlay ? (
                            <FaPause/>
                        ) : (
                            <FaPlay/>
                        )
                    }
                </div>
            </div>
            <MyVideo
                src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
                ref={videoPlayerRef}
                type="video/mp4"
            />
        </div>
    );
}

export default TestForwardRef;