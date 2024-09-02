import Navigation from '../components/Navigation';
import { IoMdPlay } from "react-icons/io";
import { FaVolumeUp } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdInsertComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdPause } from "react-icons/io";
import "../style/Shorts.css"
import channel from "../images/short.jpg"
import video from "../videos/video.mp4"

function Shorts() {
    return (
        <div className='short-container'>
            <Navigation />
            <div className='inner-shorts'>
                    <div className='top-icons'>
                        <span>
                            <IoMdPlay className='fun-icon'/>
                        </span>
                        <span className='range-span'>
                            <FaVolumeUp className='fun-icon'/>
                        </span>
                    </div>
                    <video src={video} autoPlay controls>Hi</video>
                    <div className='bottom-text'>
                        <div className='title'>
                            <img src={channel} />
                            <h3 className='channelName'>@lukedavidson81</h3>
                            <button>Subscribe</button>
                        </div>
                        <div className='info'>
                            <p>Boy Thinks He's Ready For Marriage #Shorts</p>
                        </div>
                    </div>
             </div>

                <div className='right-icons'>
                    <span>
                        <BiSolidLike className='fun-icon'/>
                        <p title='hi'>3M</p>
                    </span>
                    <span>
                        <BiSolidDislike className='fun-icon'/>
                        <p>Dislike</p>
                    </span>
                    <span>
                        <BiSolidCommentDetail className='fun-icon'/>
                        <p>Comment</p>
                    </span>
                    <span>
                        <FaShare className='fun-icon'/>
                        <p>Share</p>
                    </span>
                    <span><SlOptionsVertical className='fun-icon'/></span>
                    <span>
                        <img src={channel} />
                    </span>
                </div>
        </div>
    )
}

export default Shorts