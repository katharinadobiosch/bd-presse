import React from "react";

import { Link, useParams } from "react-router-dom";

import moment from "moment";

// Stylesheet
import styles from "../Article/Article.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// JSON file
import jsonData from "../../test.json";

// Components

const Article = () => {
    let currentArticleIndex;
    const { id } = useParams();
    return (
        <>
            <div>
                {jsonData.map((article, index) => {
                    if (article.id === id) {
                        currentArticleIndex = index;
                        return (
                            <div
                                className={styles["article-container"]}
                                key={article.id}
                            >
                                <div className={styles.header}>
                                    <div className={styles.title}>
                                        {article.title}
                                    </div>
                                    <div className={styles.date}>
                                        {moment(
                                            `${article.publish_date}`
                                        ).format("DD.MM.YYYY")}
                                    </div>
                                </div>

                                <div className={styles["main-container"]}>
                                    <div className={styles.image}>
                                        <img
                                            src={article.image}
                                            alt="needed description
"
                                        />
                                    </div>
                                    <div
                                        className={styles["content-container"]}
                                    >
                                        <div
                                            className={styles["content-text"]}
                                            dangerouslySetInnerHTML={{
                                                __html: `${article.text}`,
                                            }}
                                        ></div>

                                        <div
                                            className={
                                                styles["social-media-container"]
                                            }
                                        >
                                            <div
                                                className={styles["sm-heading"]}
                                            >
                                                Share
                                            </div>
                                            <div
                                                className={
                                                    styles["icon-container"]
                                                }
                                            >
                                                <div className={styles.fb}>
                                                    <FontAwesomeIcon
                                                        icon={faFacebookF}
                                                    />
                                                </div>
                                                <div className={styles.tw}>
                                                    <FontAwesomeIcon
                                                        icon={faTwitter}
                                                    />
                                                </div>
                                                <div className={styles.li}>
                                                    <FontAwesomeIcon
                                                        icon={faLinkedinIn}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["back-container"]}>
                                        <div className={styles["back-icon"]}>
                                            <FontAwesomeIcon
                                                icon={faArrowLeft}
                                            />
                                        </div>
                                        <div>
                                            <Link
                                                to="/presseseite"
                                                className={styles["back-link"]}
                                            >
                                                Zurück zur Übersicht
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>

            {/* // ??  PREV NEXT CONTAINER*/}
            <div className={styles["prev-nxt-container"]}>
                {/* // ?? Previous */}
                <div>
                    {jsonData.map((article, index, array) => {
                        if (
                            index === currentArticleIndex - 1 &&
                            currentArticleIndex - 1 >= 0
                        ) {
                            return (
                                <div
                                    className={styles["card-container"]}
                                    key={article.id}
                                >
                                    <div>
                                        <Link
                                            to={`/article/${article.id}`}
                                            alt={`Show property page for ${article.title}`}
                                        >
                                            <div
                                                className={styles["prev-link"]}
                                            >
                                                Previous article
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles["header-img"]}>
                                            <img
                                                src={article.image}
                                                alt="Forest by mali maeder from Pexels
"
                                            />
                                        </div>
                                        <div className={styles["card-date"]}>
                                            {moment(
                                                `${article.publish_date}`
                                            ).format("DD.MM.YYYY")}{" "}
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
                        } else if (
                            currentArticleIndex === 0 &&
                            index === array.length - 1
                        ) {
                            return (
                                <div
                                    className={styles["card-container"]}
                                    key={article.id}
                                >
                                    <div>
                                        <Link
                                            to={`/article/${article.id}`}
                                            alt={`Show property page for ${article.title}`}
                                        >
                                            <div
                                                className={styles["prev-link"]}
                                            >
                                                Previous article
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles["header-img"]}>
                                            <img
                                                src={article.image}
                                                alt="Forest by mali maeder from Pexels
"
                                            />
                                        </div>
                                        <div className={styles["card-date"]}>
                                            {moment(
                                                `${article.publish_date}`
                                            ).format("DD.MM.YYYY")}
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
                        }
                    })}
                </div>
                {/* // ?? NEXT */}
                <div>
                    {jsonData.map((article, index, array) => {
                        if (
                            index === currentArticleIndex + 1 &&
                            currentArticleIndex + 1 >= 0
                        ) {
                            return (
                                <div
                                    className={styles["card-container"]}
                                    key={article.id}
                                >
                                    <div>
                                        <Link
                                            to={`/article/${article.id}`}
                                            alt={`Show property page for ${article.title}`}
                                        >
                                            <div
                                                className={styles["next-link"]}
                                            >
                                                Next article
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles["header-img"]}>
                                            <img
                                                src={article.image}
                                                alt="Forest by mali maeder from Pexels
"
                                            />
                                        </div>
                                        <div className={styles["card-date"]}>
                                            {moment(
                                                `${article.publish_date}`
                                            ).format("DD.MM.YYYY")}{" "}
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
                        } else if (
                            currentArticleIndex === array.length - 1 &&
                            index === 0
                        ) {
                            return (
                                <div
                                    className={styles["card-container"]}
                                    key={article.id}
                                >
                                    <div>
                                        <Link
                                            to={`/article/${article.id}`}
                                            alt={`Show property page for ${article.title}`}
                                        >
                                            <div
                                                className={styles["next-link"]}
                                            >
                                                Next article
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles["header-img"]}>
                                            <img
                                                src={article.image}
                                                alt="Forest by mali maeder from Pexels
"
                                            />
                                        </div>
                                        <div className={styles["card-date"]}>
                                            {moment(
                                                `${article.publish_date}`
                                            ).format("DD.MM.YYYY")}
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
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default Article;
