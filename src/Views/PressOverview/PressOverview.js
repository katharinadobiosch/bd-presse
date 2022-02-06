import React from "react";

// Components
import Card from "../../Components/Card/Card";

// Stylesheet
import styles from "../PressOverview/PressOverview.module.scss";

const PressOverview = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>Pressemitteilungen</div>
                    <div>
                        Hier findest du unsere aktuellen Neuigkeiten und
                        Pressemeldungen.
                    </div>
                    <div>
                        Bist du Journalist? {""}
                        <a
                            href="https://www.berlin-direktversicherung.de/unternehmen/presse"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Kontaktiere uns
                        </a>
                    </div>
                </div>
                <div className={styles["card-container"]}>
                    <Card />
                </div>
            </div>
        </>
    );
};

export default PressOverview;
