import Navigation from '../components/Navigation';
import { BsGrid3X3 } from "react-icons/bs";
import { IoIosList } from "react-icons/io";
import "../style/Subscriptions.css"
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"
import img5 from "../images/5.png"
import img6 from "../images/6.png"
import bright from "../images/bright sides.jpg"
import { SlOptionsVertical } from "react-icons/sl";

const videos1 = [
    {
        link: "https://www.youtube.com/watch?v=_BypcTt2Pw8",
        img: img1,
        imgChan: bright,
        imgTitle: "80 Everyday Myths We All Still Fall For",
        chanName: "BRIGHT SIDE",
        time: "3.2K Views . Streamed 20 minutes ago"
    },
    {
        link: "https://www.youtube.com/watch?v=XDfwn_DXzzo",
        img: img2,
        imgChan: bright,
        imgTitle: "Anthropologists Made A Stunning Discovery About Neanderthals",
        chanName: "BRIGHT SIDE",
        time: "27 Views . 25 minutes ago"
    },
    {
        link: "https://www.youtube.com/watch?v=jnaQ-veX5o0",
        img: img3,
        imgChan: bright,
        imgTitle: "Unsolved Mysteries Of Objects That Appeared and Vanished In Flash",
        chanName: "BRIGHT SIDE",
        time: "4.2K Views . 25 hours ago"
    },
    {
        link: "https://www.youtube.com/watch?v=yic30CcEDUg",
        img: img4,
        imgChan: bright,
        imgTitle: "Feel the Power of a Tsunami Wave in 360° VR",
        chanName: "BRIGHT SIDE",
        time: "10K Views . 3 weeks ago"
    },
    {
        link: "https://www.youtube.com/watch?v=H33RkVZUhWU&t=11s",
        img: img5,
        imgChan: bright,
        imgTitle: "Survival Tips to Use When Every Second Matters",
        chanName: "BRIGHT SIDE",
        time: "1K Views . 5 days ago"
    },
    {
        link: "https://www.youtube.com/watch?v=sit9jKj0o4E",
        img: img6,
        imgChan: bright,
        imgTitle: "Big Riddles Marathon to Twist Your Mind in Knots",
        chanName: "BRIGHT SIDE",
        time: "20K View . 12 weeks ago"
    }
]

function Subscriptions() {
    return (
        <div className='subscription-container'> 
            <Navigation />
            <div className='top-text'>
                <h1>Latest</h1>
                <div className='right'>
                    <a href='https://www.youtube.com/feed/channels' alt='Hi'>Manage</a>
                    <BsGrid3X3 style={{fontWeight: "900"}}/>
                    <IoIosList />
                </div>
            </div>
            <div className='body'>
                <div className='videos'>
                {videos1.map((video) => {
                    return(
                        <div className='video'>
                            <a href={video.link} style={{textDecoration: "none"}}>
                                <img src={video.img} className='img'/>
                                <div className='title-text'>
                                    <div className='left'>
                                        <img src={video.imgChan} />
                                    </div>
                                    <div className='right'>
                                        <h2 className='img-title'>{video.imgTitle}</h2>
                                        <p className='hover-text-white'>{video.chanName}</p>
                                        <p>{video.time}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}
                        </div>
                    </div>
                </div>
    ) 
}

export default Subscriptions