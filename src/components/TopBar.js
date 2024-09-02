import "../style/TopBar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../images/main.png"
import { SiYoutubetv } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice, MdOutlineVideoCall, MdVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile from "../images/profile.jpg"

function TopBar() {
    return (
        <div className="Top-bar-container" style={{color: "#000", height: "300px", backgroundColor: "#000"}}>
            <div className="div-1">
                <img src={Logo} alt="logo" style={{display: "inline-block", width: "70%", marginTop: "0", cursor: "pointer"}}/></div>

            <div className='input-div'>
                <input type='text' className="search-bar" placeholder="Search"/>
                <button className="voice" style={{backgroundColor: "rgb(34, 34, 34)", border:" 1px solid rgb(78, 78, 78)",  height: "24px", padding: "22.5px",  borderRadius: "50px", borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
                    <CiSearch style={{color: "white", fontSize: "23px"}}/>
                </button>
                <MdKeyboardVoice title="Search with your voice" className="hover-white" style={{marginLeft: "10px", color: "white", backgroundColor: "rgb(34, 34, 34)", padding: "10px", fontSize: "30px", borderRadius: "50%", cursor: "pointer"}}/>            </div>
        <div className="DIV-3">
            <MdOutlineVideoCall className="hover-white" style={{color: "white", fontSize: "30px", marginLeft: "20px", cursor: "pointer"}}/>
                <IoIosNotificationsOutline className="hover-white" style={{color: "white", fontSize: "30px", marginLeft: "20px", cursor: "pointer"}}/>

                <img alt="idk" src={profile} style={{height: "40px", width: "40px", borderRadius: "50%", marginLeft: "20px", cursor: "pointer"}}/>
        </div>
        </div>
    )
}

export default TopBar