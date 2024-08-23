import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Link,
  Outlet,
} from "react-router-dom";
import "./styles.css";

const App = lazy(() => import("./pages/App"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export function Nav() {
  return (
    <div>
      <nav>
        <h1>
          <Link to="/">
            <span>🏡</span> Houses.
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            index
            path="/"
            element={
              <React.Suspense fallback={<div />}>
                <App />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<div />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback={<div />}>
                <Contact />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);
