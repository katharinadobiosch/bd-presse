import React from "react";

import { Link } from "react-router-dom";

import moment from "moment";

// import JSON file
import jsonData from "../../test.json";

// Stylesheet
import styles from "../Card/Card.module.scss";

// !! fetch json data
const Card = () => {
    return (
        <>
            {jsonData.map((article, index) => {
                return (
                    <div className={styles["card-container"]} key={article.id}>
                        <div className={styles.content}>
                            <div className={styles["header-img"]}>
                                <img
                                    src={article.image}
                                    alt="Forest by mali maeder from Pexels
"
                                />
                            </div>

                            <div className={styles.date}>
                                {moment(`${article.publish_date}`).format(
                                    "DD.MM.YYYY"
                                )}
                            </div>
                            <div className={styles.headline}>
                                {article.title}
                            </div>
                            <div className={styles.text}>
                                {article.preview_text}
                            </div>

                            <div className={styles.link}>
                                <Link
                                    to={`/article/${article.id}`}
                                    alt={`Show property page for ${article.title}`}
                                >
                                    <div>Artikel lesen</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Card;
