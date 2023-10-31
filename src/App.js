import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import styles from './App.module.css';
import FirstPage from "./components/FirstPage";
import CompeleteSite from "./components/CompeleteSite";
import ResultsLoginPage from './components/ResultsLoginPage';
import AdminLoginPage from "./components/AdminLoginPage";
import AdminPage from "./components/AdminPage";
import Header from "./components/Header.js";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <div className={styles.landingContainer}>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/adminPage" element={<AdminPage />} />
            <Route path="/adminloginpage" element={<AdminLoginPage />} />
            <Route path="/resultLoginPage" element={<ResultsLoginPage />} />
            <Route path="/site" element={<CompeleteSite />} />
            <Route path="/" element={<FirstPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        <Header />
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;