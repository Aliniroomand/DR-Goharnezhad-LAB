import { Route , Routes , Navigate} from "react-router-dom";

//styles
import styles from './App.module.css';
//components
import FirstPage from "./components/FirstPage";
import CompeleteSite from "./components/CompeleteSite";
import ResultsLoginPage from './components/ResultsLoginPage'
import AdminLoginPage from "./components/AdminLoginPage";
import AdminPage from "./components/AdminPage";
import Header from "./components/Header.js";

function App() {
  return (
    <>
    <div className={styles.landingContainer}>
      <Routes >
        <Route path="/adminPage" element={<AdminPage/>}/>
        <Route path="/adminloginpage" element={<AdminLoginPage/>}/>
        <Route path="/results" element={<ResultsLoginPage/>}/>
        <Route path="/site" element={<CompeleteSite />} />
        <Route path="/" element={<FirstPage/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    <Header/>
</>
  );
}

export default App;
