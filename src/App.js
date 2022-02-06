import React from "react";

// import { Link, Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// All Views
import PressOverview from "../src/Views/PressOverview/PressOverview";
import ArticleOverview from "./Views/ArticleOverview/ArticleOverview";
import ForAndrea from "../src/Components/ForAndrea/ForAndrea";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />

                <Routes>
                    <ForAndrea
                        path="/bd-presse"
                        exact
                        element={<ForAndrea />}
                    />

                    <Route
                        path="/presseseite"
                        exact
                        element={<PressOverview />}
                    />
                    <Route
                        path="/article"
                        exact
                        element={<ArticleOverview />}
                    />

                    <Route
                        path="/article/:id"
                        element={<ArticleOverview />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
