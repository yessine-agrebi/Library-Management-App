import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListLivres from './Components/Livres/ListLivres';
import ListAuteurs from './Components/Auteurs/ListAuteurs';
import DashboardAdmin from "./Components/Admin/DashboardAdmin"
import ListEditeurs from './Components/Editeurs/ListEditeurs'
import Register from './Components/Admin/register';
function App() {
  return (
    <div className="App">
        <Router>
        <DashboardAdmin />
          <Routes>
            <Route path='/admin/livres' element={<ListLivres />}></Route>
            <Route path="/admin/auteurs" element={<ListAuteurs />}></Route>
            <Route path='/admin/editeurs' element={<ListEditeurs />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
