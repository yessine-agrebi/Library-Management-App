import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListLivres from './Components/Livres/ListLivres';
import DashboardAdmin from "./Components/Admin/DashboardAdmin"

import Register from './Components/Admin/register';
function App() {
  return (
    <div className="App">
        <Router>
        
          <Routes>
            <Route path='/dashboard' element={<DashboardAdmin />}></Route>
            <Route path='/admin/livres' element={<ListLivres />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
