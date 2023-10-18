import { Route , Routes , Navigate} from "react-router-dom";

//components
import FirstPage from "./components/FirstPage";
import CompeleteSite from "./components/CompeleteSite";
import AdminPage from './components/AdminPage'
import Results from './components/Results'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/adminPage" element={<AdminPage/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/site" element={<CompeleteSite />} />
        <Route path="/" element={<FirstPage/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
