import React, { useState } from "react";
import styles from "./components/Site.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageOne } from "./components/pages/PageOne";
import { PageTwo } from "./components/pages/PageTwo";
import { PageThree } from "./components/pages/PageThree";
import { Error404 } from "./components/pages/Error404";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div>
            <NavLink
              to={"/adidas"}
              className={(isActive) => {
                return isActive.isActive ? styles.active : styles.navLink;
              }}
            >
              page1
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/adidas1"}
              className={(isActive) => {
                return isActive.isActive ? styles.active : styles.navLink;
              }}
            >
              page2
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/adidas2"}
              className={(isActive) => {
                return isActive.isActive ? styles.active : styles.navLink;
              }}
            >
              page3
            </NavLink>
          </div>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={"/adidas"} />} />
            <Route path="/adidas" element={<PageOne />} />
            <Route path="/adidas1" element={<PageTwo />} />
            <Route path="/adidas2" element={<PageThree />} />

            <Route path="adidas/error404" element={<Error404 />} />
            <Route path="*" element={<Navigate to="adidas/error404" />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
