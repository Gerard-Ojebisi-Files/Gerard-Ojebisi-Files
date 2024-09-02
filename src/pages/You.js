import Navigation from "../components/Navigation";
import you from "../images/you.jpg";
import "../style/You.css";
import download1 from "../images/download1.webp";
import download2 from "../images/download2.webp";
import download3 from "../images/download3.webp";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import watch1 from "../images/watch1.png";
import watch2 from "../images/watch2.png";
import watch3 from "../images/watch3.png";
import like2 from "../images/like2.png";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import playlist from "../images/playlist.png";
import { FaAngleDown } from "react-icons/fa6";

function You() {
    return (
        <div className="you-container">
            <Navigation />
            <div className="heading">
                <div className="img-div">
                    <img src={you} />
                </div>
                <div className="text-profile">
                    <h1>Gerard Ojebisi</h1>
                    <p>Create a Channel</p>
                    <div className="btn-div">
                        <button
                            type="button"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <MdOutlineSwitchAccount style={{ color: "white" }} />
                            <span>Switch account</span>
                        </button>
                        <button
                            type="button"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <FaGoogle style={{ color: "white" }} />
                            <span>Google Account</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="main-body">
                <div className="group">
                    <div className="top-text2">
                        <a href="https://www.youtube.com/feed/history">
                            <h2 className="m-10">History</h2>
                        </a>
                        <button type="button" className="view-all-btn">
                            View All
                        </button>
                    </div>
                    <div className="lower-div">
                        <a href="https://www.youtube.com/watch?v=dQgAt3jWVjU">
                            <div className="down down-1">
                                <div className="img-div2">
                                    {" "}
                                    <img src={download1} alt="down-1" />
                                    <span className="time">12:50</span>
                                </div>
                                <h3> How To Draw A Cup Step By Step ☕ Cup Drawing</h3>
                                <p>Super Easy Drawings</p>
                                <ul>
                                    <li>65K views </li>
                                    <li className="dot">.</li>
                                    <li>3 years ago </li>
                                </ul>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/watch?v=lMYrLaKCTUc&t=2s&pp=ygUgZmFyamFuYSBkcmF3aW5nIGFjYWRlbXkgZm9vdGJhbGw%3D">
                            <div className="down down-2">
                                <div className="img-div2">
                                    <img src={download2} alt="down-1" />
                                    <span className="time">12:50</span>
                                </div>
                                <h3>
                                    How to draw a Football step by step (very easy) || Art video
                                </h3>
                                <p>Farjana Drawing Academy</p>
                                <ul>
                                    <li>1M views</li>
                                    <li className="dot">.</li>
                                    <li>7 years ago </li>
                                </ul>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/watch?v=nclskoxZ8RA&pp=ygURa2lkcGlkIGFydCBhbmltYWw%3D">
                            <div className="down down-3">
                                <div className="img-div2">
                                    {" "}
                                    <img src={download3} alt="down-1" />
                                    <span className="time">12:50</span>
                                </div>
                                <h3>
                                    10+ Easy Animal Drawings for Beginners | Animals drawing...
                                </h3>
                                <p>Kidpid Art and Craft</p>
                                <ul>
                                    <li>89K views</li>
                                    <li className="dot">.</li>
                                    <li>1 year ago </li>
                                </ul>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/watch?v=_BypcTt2Pw8">
                            <div className="down down-2">
                                <img src={img1} alt="down-1" />
                                <h3>80 Everyday Myths We All Still Fall For</h3>
                                <p>BRIGHT SIDE</p>
                                <ul>
                                    <li>3.2K Views </li>
                                    <li className="dot">.</li>
                                    <li>Streamed 20 minutes ago </li>
                                </ul>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/watch?v=XDfwn_DXzzo">
                            <div className="down down-3">
                                <img src={img2} alt="down-1" />
                                <h3>
                                    Anthropologists Made A Stunning Discovery About Neanderthals
                                </h3>
                                <p>BRIGHT SIDE</p>
                                <ul>
                                    <li>100K views</li>
                                    <li className="dot">.</li>
                                    <li>2 years ago </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="main-body">
                    <div className="group playlist-group">
                        <div className="top-text2">
                            <a href="https://www.youtube.com/playlist?list=WL">
                                <h2 className="m-10">Playlist</h2>
                                <span className="top-little-text">A-Z <FaAngleDown /></span>
                            </a>
                            <button type="button" className="view-all-btn">
                                View All
                            </button>
                        </div>
                        <div className="lower-div">
                            <a href="https://www.youtube.com/watch?v=uzH4Bu1WJLM&list=LL&pp=iAQB">
                                <div className="down down-1">
                                    <div className="img-div2">
                                        <img src={playlist} alt="down-1" />
                                    </div>
                                    <h3>Liked Videos</h3>
                                    <p>Playlist</p>
                                    <h4>View Full Playlist</h4>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="group">
                        <div className="top-text2">
                            <a href="https://www.youtube.com/playlist?list=WL">
                                <h2 className="m-10">Watch Later</h2>
                                <span className="top-little-text">4</span>
                            </a>
                            <button type="button" className="view-all-btn">
                                <a href="https://www.youtube.com/playlist?list=WL">View All</a>
                            </button>
                        </div>
                        <div className="lower-div">
                            <a href="https://www.youtube.com/watch?v=jnaQ-veX5o0">
                                <div className="down down-3">
                                    <div className="img-div2">
                                        <img src={img3} alt="down-1" />
                                    </div>
                                    <h3>
                                        Unsolved Mysteries Of Objects That Appeared and Vanished In
                                        Flash
                                    </h3>
                                    <p>Kidpid Art and Craft</p>
                                    <ul>
                                        <li>4.2K Views</li>
                                        <li className="dot">.</li>
                                        <li>25 hours ago</li>
                                    </ul>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=yic30CcEDUg">
                                <div className="down down-2">
                                    <img src={img4} alt="down-1" />
                                    <h3>Feel the Power of a Tsunami Wave in 360° VR</h3>
                                    <p>BRIGHT SIDE</p>
                                    <ul>
                                        <li>10K Views </li>
                                        <li className="dot">.</li>
                                        <li> 3 weeks ago</li>
                                    </ul>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=H33RkVZUhWU&t=11s">
                                <div className="down down-3">
                                    <img src={img5} alt="down-1" />
                                    <h3>Survival Tips to Use When Every Second Matters</h3>
                                    <p>BRIGHT SIDE</p>
                                    <ul>
                                        <li>1K Views</li>
                                        <li className="dot">.</li>
                                        <li>5 days ago </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="group">
                        <div className="top-text2">
                            <a href="https://www.youtube.com/playlist?list=WL">
                                <h2 className="m-10">Liked Videos</h2>
                                <span className="top-little-text">11</span>
                            </a>
                            <button type="button" className="view-all-btn">
                                <a href="https://www.youtube.com/playlist?list=WL">View All</a>
                            </button>
                        </div>
                        <div className="lower-div">
                            <a href="https://www.youtube.com/watch?v=jnaQ-veX5o0">
                                <div className="down down-3">
                                    <div className="img-div2">
                                        <img src={watch1} alt="down-1" />
                                    </div>
                                    <h3>
                                        Unsolved Mysteries Of Objects That Appeared and Vanished In
                                        Flash
                                    </h3>
                                    <p>Kidpid Art and Craft</p>
                                    <ul>
                                        <li>4.2K Views</li>
                                        <li className="dot">.</li>
                                        <li>25 hours ago</li>
                                    </ul>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=yic30CcEDUg">
                                <div className="down down-2">
                                    <img src={watch2} alt="down-1" />
                                    <h3>Feel the Power of a Tsunami Wave in 360° VR</h3>
                                    <p>BRIGHT SIDE</p>
                                    <ul>
                                        <li>10K Views </li>
                                        <li className="dot">.</li>
                                        <li> 3 weeks ago</li>
                                    </ul>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=H33RkVZUhWU&t=11s">
                                <div className="down down-3">
                                    <img src={watch3} alt="down-1" />
                                    <h3>Survival Tips to Use When Every Second Matters</h3>
                                    <p>BRIGHT SIDE</p>
                                    <ul>
                                        <li>1K Views</li>
                                        <li className="dot">.</li>
                                        <li>5 days ago </li>
                                    </ul>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=H33RkVZUhWU&t=11s">
                                <div className="down down-3">
                                    <img src={img6} alt="down-1" />
                                    <h3>Survival Tips to Use When Every Second Matters</h3>
                                    <p>BRIGHT SIDE</p>
                                    <ul>
                                        <li>1K Views</li>
                                        <li className="dot">.</li>
                                        <li>5 days ago </li>
                                    </ul>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=H33RkVZUhWU&t=11s">
                                <div className="down down-3">
                                    <img src={like2} alt="down-1" />
                                    <h3>Survival Tips to Use When Every Second Matters</h3>
                                    <p>BRIGHT SIDE</p>
                                    <ul>
                                        <li>1K Views</li>
                                        <li className="dot">.</li>
                                        <li>5 days ago </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="group clip-group">
                        <div className="top-text2">
                            <a href="https://www.youtube.com/feed/clips">
                                <h2>Your Clips</h2>
                            </a>
                        </div>
                        <p>
                            Clip and share your favorite moments. Your list shows up right
                            here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default You;
