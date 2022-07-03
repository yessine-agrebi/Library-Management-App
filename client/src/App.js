import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListLivres from './Components/Livres/ListLivres';
import AdminSideBar from "./Components/Admin/AdminSidebar";
import AdminNavbar from "./Components/Admin/AdminNavbar";
import DashboardAdmin from "./Components/Admin/DashboardAdmin"
import AjoutLivre from './Components/Livres/AjoutLivre';
function App() {
  return (
    <div className="App">
        <Router>
        <AdminSideBar />
        <AdminNavbar />
          <Routes>
            <Route path='/dashboard' element={<DashboardAdmin />}></Route>
            <Route path='/livres' element={<ListLivres />}></Route>
            <Route path='/ajout-livre' element={<AjoutLivre />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
