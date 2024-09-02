import Navigation from "../components/Navigation";
import "../style/Home.css";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import bright from "../images/bright sides.jpg";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import wimpykid1 from "../images/wimpykid1.png";
import wimpykid2 from "../images/wimpykid2.png";
import wimpykid3 from "../images/wimpykid3.png";
import wild1 from "../images/wild1.png";
import wild2 from "../images/wild2.png";
import wild3 from "../images/wild3.png";
import insect1 from "../images/insect1.png";
import insect2 from "../images/insect2.png";
import insect3 from "../images/insect3.png";
import sonic1 from "../images/sonic1.png";
import sonic2 from "../images/sonic2.png";
import sonic3 from "../images/sonic3.png";
import life1 from "../images/life1.png";
import life2 from "../images/life2.png";
import life3 from "../images/life3.png";
import fairy1 from "../images/fairy1.png";
import fairy2 from "../images/fairy2.png";
import fairy3 from "../images/fairy3.png";
import action1 from "../images/action1.png";
import action2 from "../images/action2.png";
import action3 from "../images/action3.png";
import dragonB1 from "../images/dragonB1.png";
import dragonB2 from "../images/dragonB2.png";
import dragon3 from "../images/dragon3.png";
import comedy1 from "../images/comedy1.png";
import comedy2 from "../images/comedy2.png";
import comedy3 from "../images/comedy3.png";
import actionChan from "../images/actionGameChan.jpg";
import dragonChan from "../images/DRAGONCHAN.jpg";
import fairyChan from "../images/fairyChan.jpg";
import lifeChan from "../images/lifeGameChan.jpg";
import sonicChan from "../images/sonicChan.jpg";
import wimpychan from "../images/wimpychan1.jpg";
import wildChan from "../images/wildChan.jpg";
import comedyChan from "../images/comedyChan.jpg";
import insectChan from "../images/insectChan.jpg";
import { useState, useEffect } from "react";

const all = [
    // Bright Side
    {
        category: "brightSide",
        link: "https://www.youtube.com/watch?v=_BypcTt2Pw8",
        img: img1,
        imgChan: bright,
        imgTitle: "80 Everyday Myths We All Still Fall For",
        chanName: "BRIGHT SIDE",
        time: "3.2K Views . Streamed 20 minutes ago",
    },
    {
        category: "brightSide",
        link: "https://www.youtube.com/watch?v=XDfwn_DXzzo",
        img: img2,
        imgChan: bright,
        imgTitle: "Anthropologists Made A Stunning Discovery About Neanderthals",
        chanName: "BRIGHT SIDE",
        time: "27 Views . 25 minutes ago",
    },
    {
        category: "brightSide",
        link: "https://www.youtube.com/watch?v=jnaQ-veX5o0",
        img: img3,
        imgChan: bright,
        imgTitle:
            "Unsolved Mysteries Of Objects That Appeared and Vanished In Flash",
        chanName: "BRIGHT SIDE",
        time: "4.2K Views . 25 hours ago",
    },

    // Wimpy Kid
    {
        category: "wimpyKid",
        link: "https://www.youtube.com/watch?v=KVaPVuUT340",
        img: wimpykid1,
        imgChan: wimpychan,
        imgTitle: "Party in the Pool Movie Clip - Diary of a Wimpy Kid 3 (2012)",
        chanName: "KinoCheck Archive",
        time: "6M views . 5 years ago",
    },
    {
        category: "wimpyKid",
        link: "https://www.youtube.com/watch?v=FEV6H2iIUbg",
        img: wimpykid2,
        imgChan: wimpychan,
        imgTitle: "I Bought The WEIRDEST Wimpy Kid Products",
        chanName: "CrowRanaBurger",
        time: "220K views . 4 months ago",
    },
    {
        category: "wimpyKid",
        link: "https://www.youtube.com/watch?v=5XM6AdleGmA",
        img: wimpykid3,
        imgChan: wimpychan,
        imgTitle: "Watching The Animated Wimpy Kid Movies - Diamondbolt",
        chanName: "Diamondbolt",
        time: "470K views . 1 year ago",
    },

    // WildLife
    {
        category: "wildLife",
        link: "https://www.youtube.com/watch?v=PBCNWmU5apE",
        img: wild1,
        imgChan: wildChan,
        imgTitle: "Why It Sucks to Be a Male Hyena",
        chanName: "MinuteEarth",
        time: "18M views . 7 years ago",
    },
    {
        category: "wildLife",
        link: "https://www.youtube.com/watch?v=cRlvZK9dvBs",
        img: wild2,
        imgChan: wildChan,
        imgTitle: "STUNG by a BIG BLUE Bee!",
        chanName: "Brave Wilderness",
        time: "612K views . 1 day ago",
    },
    {
        category: "wildLife",
        link: "https://www.youtube.com/watch?v=Q2AjW1vg0ig",
        img: wild3,
        imgChan: wildChan,
        imgTitle: "EAGLE vs FALCON - Who Would WIN This Fight?",
        chanName: "Wild Planet Earth",
        time: "470K views . 9 months ago",
    },

    // Insects
    {
        category: "insects",
        link: "https://www.youtube.com/watch?v=uKP3lc9SOaA",
        img: insect1,
        imgChan: insectChan,
        imgTitle: "Why There Are No King Bees",
        chanName: "MinuteEarth",
        time: "1.2M views . 2 weeks ago",
    },
    {
        category: "insects",
        link: "https://www.youtube.com/watch?v=Z1Nyc8X8Ru8",
        img: insect2,
        imgChan: insectChan,
        imgTitle: "Human Blood vs. Snake Venom!",
        chanName: "Brave Wilderness",
        time: "47M views . 4 years ago",
    },
    {
        category: "insects",
        link: "https://www.youtube.com/watch?v=fioZCWq_vy4",
        img: insect3,
        imgChan: insectChan,
        imgTitle: "What Mantises are afraid of the most",
        chanName: "Wild Planet Earth",
        time: "4 years ago . 11 months ago",
    },

    // sonic
    {
        category: "sonic",
        link: "https://www.youtube.com/watch?v=ueEbqMBawCs",
        img: sonic1,
        imgChan: sonicChan,
        imgTitle:
            "SONIC fusion ROBOTNIK GIANT EGGMAN ROBOT | what will happen next | Sonic The...",
        chanName: "How to Draw Sonic The Hedgehog",
        time: "100K views . 2 years ago",
    },
    {
        category: "sonic",
        link: "https://www.youtube.com/watch?v=V_OmsCuEp6g",
        img: sonic2,
        imgChan: sonicChan,
        imgTitle:
            "Rich Sonic DAD VS Poor Shadow DAD | Very Sad Story But Happy Ending |Sonic Life...",
        chanName: "Brave Wilderness",
        time: "16M views . 2 years ago",
    },
    {
        category: "sonic",
        link: "https://www.youtube.com/watch?v=PD4dsFlEdXQ",
        img: sonic3,
        imgChan: sonicChan,
        imgTitle: 'SONIC "Super Sonic Gold Mode" Scene 4K ᴴᴰ',
        chanName: "ONE Media",
        time: "25M views . 1 year ago",
    },

    // fairies
    {
        category: "fairies",
        link: "https://www.youtube.com/watch?v=RwZvk2-Mylk",
        img: fairy1,
        imgChan: fairyChan,
        imgTitle:
            "The Power of Twin Telepathy 👩_❤️_👩💕 Princess Story 👰🌛 Fairy Tales in English...",
        chanName: "WOA Fairy Tales - English",
        time: "709K views . 7 months ago",
    },
    {
        category: "fairies",
        link: "https://www.youtube.com/watch?v=GE5P_yB-FsQ",
        img: fairy2,
        imgChan: fairyChan,
        imgTitle:
            "Secret of Heaven & Hell Butterfly 🦋 Princess Story 👰🌛 Fairy Tales in English...",
        chanName: "WOA Fairy Tales - English",
        time: "435K views . 6 months ago",
    },
    {
        category: "fairies",
        link: "https://www.youtube.com/watch?v=_oPfXvQozCM",
        img: fairy3,
        imgChan: fairyChan,
        imgTitle:
            "The Serpent Queen 🐍 Bedtime Stories🌛 Fairy Tales in English...",
        chanName: "WOA Fairy Tales - English",
        time: "731K views . 10 months ago",
    },

    {
        category: "lifeGames",
        link: "https://www.youtube.com/watch?v=DyGZUYEN2Sg",
        img: life1,
        imgChan: lifeChan,
        imgTitle: "👉 Boy won't show face in school | Episode 15 | Story Roblox",
        chanName: "Doo Roblox TV",
        time: "237K views . 4 weeks ago",
    },
    {
        category: "lifeGames",
        link: "https://www.youtube.com/watch?v=ntCr9U0gOok",
        img: life2,
        imgChan: lifeChan,
        imgTitle: "👉 Boy won't show face in school | Episode 18 | Story Roblox",
        chanName: "Doo Roblox TV",
        time: "16M views . 2 years ago",
    },
    {
        category: "lifeGames",
        link: "https://www.youtube.com/watch?v=TwKUPUDSu2c",
        img: life3,
        imgChan: lifeChan,
        imgTitle: "👉 Boy won't show face in school | Episode 17 | Story Roblox",
        chanName: "Doo Roblox TV",
        time: "25M views . 1 year ago",
    },

    // Action Games
    {
        category: "actionGames",
        link: "https://www.youtube.com/watch?v=tvEZwhCgtnQ",
        img: action1,
        imgChan: actionChan,
        imgTitle:
            "Boy Won't Show Face in School, You Helped Me Overcome My Fear | Story Roblox",
        chanName: "Roblox Love Stories",
        time: "478K views . 1 month ago",
    },
    {
        category: "actionGames",
        link: "https://www.youtube.com/watch?v=dJ3jUE-z2uM",
        img: action2,
        imgChan: actionChan,
        imgTitle: "I Survived 100 Days as a FIRE POKEMON in HARDCORE Minecraft",
        chanName: "Fozo",
        time: "5M views . 10 months ago",
    },
    {
        category: "actionGames",
        link: "https://www.youtube.com/watch?v=HD4NM5aKo_0",
        img: action3,
        imgChan: actionChan,
        imgTitle: "Eat SHARKS to GROW | Hungry Shark Evolution",
        chanName: "BeckBroJack",
        time: "3.9M views . 2 years ago",
    },

    // Dragon Ball
    {
        category: "dragonBall",
        link: "https://www.youtube.com/watch?v=HsooYHrx8Hk",
        img: dragonB1,
        imgChan: dragonChan,
        imgTitle:
            "GOKU AND CAULIFLA FELL IN LOVE AND WERE BETRAYED | FULL MOVIE 2024",
        chanName: "FreduBall Stories",
        time: "1.2M views . 1 year ago",
    },
    {
        category: "dragonBall",
        link: "https://www.youtube.com/watch?v=_gOcRLebIAc",
        img: dragonB2,
        imgChan: dragonChan,
        imgTitle:
            "DRAGON BALL FIGHTERZ All Special Encounters (All Roasts, Funny Dialogue...",
        chanName: "RabidRetrospectGames",
        time: "2.1M views . 6 years ago",
    },
    {
        category: "dragonBall",
        link: "https://www.youtube.com/watch?v=iEvguYBUj_s",
        img: dragon3,
        imgChan: dragonChan,
        imgTitle: "How Gohan Sees Everyone in Dragon Ball",
        chanName: "Z comparison",
        time: "18K views . 13 days ago",
    },

    // Comedy
    {
        category: "comedy",
        link: "https://www.youtube.com/watch?v=ugCsyOlVSY0",
        img: comedy1,
        imgChan: comedyChan,
        imgTitle: "MOANA 2 Trailer 2 (4K ULTRA HD) 2024",
        chanName: "TrailerSpot",
        time: "443K views . 2 weeks ago",
    },
    {
        category: "comedy",
        link: "https://www.youtube.com/watch?v=tZNxs_DN31Y",
        img: comedy2,
        imgChan: comedyChan,
        imgTitle: "The Loud House If Everyone Was A Boy! The Loud House",
        chanName: "The Loud House",
        time: "12M views . 2 years ago",
    },
    {
        category: "comedy",
        link: "https://www.youtube.com/watch?v=J3EqdVIfquw",
        img: comedy3,
        imgChan: comedyChan,
        imgTitle:
            "Student From Shaolin School Moves To Regular School And Shocks Everyone",
        chanName: "Mystery Recapped",
        time: "10M views . 2 years ago",
    },
];

let brightSide = all.filter((word) => {
    return word.category === "brightSide";
});
let wimpyKid = all.filter((word) => {
    return word.category === "wimpyKid";
});
let wildLife = all.filter((word) => {
    return word.category === "wildLife";
});
let insects = all.filter((word) => {
    return word.category === "insects";
});
let sonic = all.filter((word) => {
    return word.category === "sonic";
});
let fairies = all.filter((word) => {
    return word.category === "fairies";
});
let lifeGames = all.filter((word) => {
    return word.category === "lifeGames";
});
let actionGames = all.filter((word) => {
    return word.category === "actionGames";
});
let dragonBall = all.filter((word) => {
    return word.category === "dragonBall";
});
let comedy = all.filter((word) => {
    return word.category === "comedy";
});

function Home() {
    const [brightSide2, setBrightSide] = useState(true);
    const [wimpyKid2, setwimpyKid] = useState(true);
    const [wildLife2, setWildLife] = useState(true);
    const [insects2, setInsects] = useState(true);
    const [sonic2, setSonic] = useState(true);
    const [fairies2, setFairies] = useState(true);
    const [lifeGames2, setLifeGames] = useState(true);
    const [actionGames2, setActionGames] = useState(true);
    const [dragonBall2, setDragonBall] = useState(true);
    const [comedy2, setComedy] = useState(true);

    return (
        <div style={{ color: "#FFF", position: "relative", marginTop: "30px" }}>
            <Navigation />
            {/* {value && 
                <h2>Hi</h2>
            } */}
            <div className="body">
                <div className="categories">
                    <button
                        className="active"
                        id="all"
                        onClick={() => {
                            setBrightSide(true);
                            setwimpyKid(true);
                            setWildLife(true);
                            setInsects(true);
                            setSonic(true);
                            setFairies(true);
                            setLifeGames(true);
                            setActionGames(true);
                            setDragonBall(true);
                            setComedy(true);
                        }}
                    >
                        All
                    </button>
                    <button
                        id="brightSide"
                        onClick={() => {
                            setBrightSide(true);
                            setwimpyKid(false);
                            setWildLife(false);
                            setInsects(false);
                            setSonic(false);
                            setFairies(false);
                            setLifeGames(false);
                            setActionGames(false);
                            setDragonBall(false);
                            setComedy(false);
                        }}
                    >
                        Bright Side
                    </button>

                    <button
                        id="wimpyKid"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(true);
                            setWildLife(false);
                            setInsects(false);
                            setSonic(false);
                            setFairies(false);
                            setLifeGames(false);
                            setActionGames(false);
                            setDragonBall(false);
                            setComedy(false);
                        }}
                    >
                        Diary of a wimpy kid
                    </button>
                    <button
                        id="wildLife"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(false);
                            setWildLife(true);
                            setInsects(false);
                            setSonic(false);
                            setFairies(false);
                            setLifeGames(false);
                            setActionGames(false);
                            setDragonBall(false);
                            setComedy(false);
                        }}
                    >
                        Wildlife
                    </button>
                    <button
                        id="insects"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(false);
                            setWildLife(false);
                            setInsects(true);
                            setSonic(false);
                            setFairies(false);
                            setLifeGames(false);
                            setActionGames(false);
                            setDragonBall(false);
                            setComedy(false);
                        }}
                    >
                        Insects
                    </button>
                    <button
                        id="sonic"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(false);
                            setWildLife(false);
                            setInsects(false);
                            setSonic(true);
                            setFairies(false);
                            setLifeGames(false);
                            setActionGames(false);
                            setDragonBall(false);
                            setComedy(false);
                        }}
                    >
                        Classic Sonic the Hedgehog
                    </button>
                    <button
                        id="fairies"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(false);
                            setWildLife(false);
                            setInsects(false);
                            setSonic(false);
                            setFairies(true);
                            setLifeGames(false);
                            setActionGames(false);
                            setDragonBall(false);
                            setComedy(false);
                        }}
                    >
                        Fairies
                    </button>
                    <button
                        id="lifeGames"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(false);
                            setWildLife(false);
                            setInsects(false);
                            setSonic(false);
                            setFairies(false);
                            setLifeGames(true);
                            setActionGames(false);
                            setDragonBall(false);
                            setComedy(false);
                        }}
                    >
                        Life Simulation Games
                    </button>
                    <button
                        id="actionGames"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(false);
                            setWildLife(false);
                            setInsects(false);
                            setSonic(false);
                            setFairies(false);
                            setLifeGames(false);
                            setActionGames(true);
                            setDragonBall(false);
                            setComedy(false);
                        }}
                    >
                        Action-adventure games
                    </button>
                    <button
                        id="dragonBall"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(false);
                            setWildLife(false);
                            setInsects(false);
                            setSonic(false);
                            setFairies(false);
                            setLifeGames(false);
                            setActionGames(false);
                            setDragonBall(true);
                            setComedy(false);
                        }}
                    >
                        Dragon Ball Super
                    </button>
                    <button
                        id="comedy"
                        onClick={() => {
                            setBrightSide(false);
                            setwimpyKid(false);
                            setWildLife(false);
                            setInsects(false);
                            setSonic(false);
                            setFairies(false);
                            setLifeGames(false);
                            setActionGames(false);
                            setDragonBall(false);
                            setComedy(true);
                        }}
                    >
                        Comedy
                    </button>
                </div>

                <div className="videos">
                    {brightSide2 &&
                        brightSide.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {wimpyKid2 &&
                        wimpyKid.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {wildLife2 &&
                        wildLife.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {insects2 &&
                        insects.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {sonic2 &&
                        sonic.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {fairies2 &&
                        fairies.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {lifeGames2 &&
                        lifeGames.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {actionGames2 &&
                        actionGames.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {dragonBall2 &&
                        dragonBall.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                    {comedy2 &&
                        comedy.map((video) => {
                            return (
                                <div className="video group-1">
                                    <a href={video.link} style={{ textDecoration: "none" }}>
                                        <img src={video.img} className="img" />
                                        <div className="title-text">
                                            <div className="left">
                                                <img src={video.imgChan} />
                                            </div>
                                            <div className="right">
                                                <h2 className="img-title">{video.imgTitle}</h2>
                                                <p className="white">{video.chanName}</p>
                                                <p>{video.time}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home;
