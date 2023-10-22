import { Route , Routes , Navigate, Link} from "react-router-dom";
//images
import Logo from "./assets/images/mainLoGO (1).png";
import siteTitle from "./assets/images/title (1).png";

//styles
import styles from './App.module.css';
//components
import FirstPage from "./components/FirstPage";
import CompeleteSite from "./components/CompeleteSite";
import Results from './components/Results'
import AdminLoginPage from "./components/AdminLoginPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <>
    <div className={styles.landingContainer}>
      <Routes >
        <Route path="/adminPage" element={<AdminPage/>}/>
        <Route path="/adminloginpage" element={<AdminLoginPage/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/site" element={<CompeleteSite />} />
        <Route path="/" element={<FirstPage/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    <div >
      <ul className={styles.siteTitle}>
        <li>
          <img src={Logo} className={styles.logo} alt="logo"/>
          <img src={siteTitle} className={styles.title} alt="sitle"/>
        </li>
        <li>
        </li>
        <li>
          <Link to='/'>صفحه اصلی</Link>
        </li>
        <li>
          <Link to='/site'> وبسایت آزمایشگاه</Link>
        </li>
        <li>
          <Link to='/adminloginpage'>ورود کارکنان</Link>
        </li>
        <li>
          <Link to='/results'>صفحه پاسخگویی اینترنتی</Link>
        </li>
      </ul>
    </div>
</>
  );
}

export default App;
