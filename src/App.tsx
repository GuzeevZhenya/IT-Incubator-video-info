import React, { useState } from "react";
import styles from "./components/Site.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageOne } from "./components/pages/PageOne";
import { PageTwo } from "./components/pages/PageTwo";
import { PageThree } from "./components/pages/PageThree";
import { Error404 } from "./components/pages/Error404";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Model } from "./components/pages/Model";
import { ModelError } from "./components/pages/ModelError";

export const PATH = {
  PAGE1: "/adidas",
  PAGE2: "/puma",
  PAGE3: "/abibas",
  MODEL: (id: string) => `/adidas/${id}`,
  MODELERROR: (id: string) => `/adidas/${id}/error`,
  ERROR: "/adidas/error404",
} as const;

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
              to={PATH.PAGE1}
              className={(isActive) => {
                return isActive.isActive ? styles.active : styles.navLink;
              }}
            >
              Adidas
            </NavLink>
          </div>
          <div>
            <NavLink
              to={PATH.PAGE2}
              className={(isActive) => {
                return isActive.isActive ? styles.active : styles.navLink;
              }}
            >
              Puma
            </NavLink>
          </div>
          <div>
            <NavLink
              to={PATH.PAGE3}
              className={(isActive) => {
                return isActive.isActive ? styles.active : styles.navLink;
              }}
            >
              Abibas
            </NavLink>
          </div>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.PAGE1} />} />
            <Route path={PATH.PAGE1} element={<PageOne />} />
            <Route path={PATH.PAGE2} element={<PageTwo />} />
            <Route path={PATH.PAGE3} element={<PageThree />} />
            <Route path={PATH.MODEL} element={<Model />} />
            <Route path={PATH.MODELERROR} element={<ModelError />} />

            {/* <Route path={PATH.ERROR} element={<Error404 />} />
            <Route path="*" element={<Navigate to="adidas/error404" />} /> */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

//

export default App;
