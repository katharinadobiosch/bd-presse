import React from "react";

import { Link } from "react-router-dom";

// Components
import Article from "../../Components/Article/Article";

// Stylesheet
import styles from "../ArticleOverview/ArticleOverview.module.scss";

const ArticleOverview = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles["link-container"]}>
                        <Link to="/presseseite" className={styles.link}>
                            &lt; Pressemitteilungen
                        </Link>
                    </div>
                </div>
                <Article />
            </div>
        </>
    );
};

export default ArticleOverview;
