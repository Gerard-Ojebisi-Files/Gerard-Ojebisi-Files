import { Link } from "react-router-dom"
import '../style/Navigation.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineSubscriptions } from "react-icons/md"
import { SiYoutubeshorts } from "react-icons/si";
import { MdVideoLibrary } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";

function Navigation() {
    return (
        <div className="navbar-container">
            <GiHamburgerMenu style={{width: "24px", height: "24px", color: "white", marginTop: "15px"}}/>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            <MdHomeFilled className="white-icons" />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/shorts'>
                            <SiYoutubeshorts className="white-icons" />
                            <p>Shorts</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/subscriptions'>
                            <MdOutlineSubscriptions className="white-icons" />
                            <p>Subscriptions</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/you'>
                            <MdVideoLibrary className="white-icons" /><p>You</p></Link>
                    </li>
                    <li>
                        <Link to='/download'><MdDownload className="white-icons" /><p>Downloads</p></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation