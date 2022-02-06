import React, { useState } from "react";

import { Link } from "react-router-dom";

// Stylesheet
import styles from "../ForAndrea/ForAndrea.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

const ForAndrea = () => {
    const [showVideo, setShowVideo] = useState(false);

    const openVideo = (event) => {
        event.preventDefault();
        setShowVideo(true);
        console.log("holiday was clicked");
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.heading}> Hi Andrea!</div>
                    <div className={styles.subheading}>
                        Do you already want to go on holiday or see the
                        Presseseite? :)
                    </div>
                </div>

                <div className={styles["content-container"]}>
                    <div className={styles["choice-container"]}>
                        <div className={styles["presse-container"]}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} />
                            </div>
                            <div onClick={openVideo}>Holiday</div>
                        </div>

                        <div className={styles["presse-container"]}>
                            <div>
                                <Link to="/presseseite" className={styles.link}>
                                    Presseseite
                                </Link>
                            </div>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                    <br />

                    {showVideo && (
                        <div className={styles.video}>
                            <iframe
                                width="315"
                                height="240"
                                src="https://www.youtube.com/embed/sTsVJ1PsnMs?controls=0&amp;start=25"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ForAndrea;
