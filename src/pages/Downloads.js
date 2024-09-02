import Navigation from "../components/Navigation";
import { MdDownload } from "react-icons/md";
import "../style/Downloads.css";
import download1 from "../images/download1.webp";
import download2 from "../images/download2.webp";
import download3 from "../images/download3.webp";

function Download() {
    return (
        <div className="downloads-div">
            <Navigation />
            <div className="upper-div">
                <div className="left">
                    <MdDownload style={{ width: "24px", height: "24px" }} />
                    <h1>Downloads</h1>
                </div>
                <div className="right">
                    <a href="https://www.youtube.com/account_downloads">Download Settings</a>
                </div>
            </div>

            <div className="lower-div">
            <a href="https://www.youtube.com/watch?v=dQgAt3jWVjU">
                <div className="down">
                        <img src={download1} alt="down-1" />
                        <h3> How To Draw A Cup Step By Step ☕ Cup Drawing</h3>
                        <p>Super Easy Drawings</p>
                        <ul>
                            <li>65K views </li>
                            <li className="dot">.</li>
                            <li>3 years ago </li>
                        </ul>
                        <button>Downloaded</button>
                    </div></a>
                    <a href="https://www.youtube.com/watch?v=lMYrLaKCTUc&t=2s&pp=ygUgZmFyamFuYSBkcmF3aW5nIGFjYWRlbXkgZm9vdGJhbGw%3D">
            <div className="down down-2">
                <img src={download2} alt="down-1" />
                <h3>How to draw a Football step by step (very easy) || Art video</h3>
                <p>Farjana Drawing Academy</p>
                <ul>
                    <li>1M views</li>
                    <li className="dot">.</li>
                    <li>7 years ago </li>
                </ul>
                <button>Downloaded</button>
            </div></a><a href="https://www.youtube.com/watch?v=nclskoxZ8RA&pp=ygURa2lkcGlkIGFydCBhbmltYWw%3D">
            <div className="down down-3">
                <img src={download3} alt="down-1" />
                <h3>10+ Easy Animal Drawings for Beginners | Animals drawing...</h3>
                <p>Kidpid Art and Craft</p>
                <ul>
                    <li>89K views</li>
                    <li className="dot">.</li>
                    <li>1 year ago </li>
                </ul>
                <button>Downloaded</button>
            </div></a>
        </div><div className="under-div">
                <hr style={{ color: "grey", width: "90%", display: "inline-block", marginTop: "50px", paddingLeft: "50px", marginRight: "auto" }} />
                <p>Downloads remain available as long as your device has an active internet connection at least once every 30 days.</p></div>
            </div>
    );
}

export default Download;
