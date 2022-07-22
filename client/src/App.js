import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListLivres from "./Components/Livres/ListLivres";
import ListAuteurs from "./Components/Auteurs/ListAuteurs";
import DashboardAdmin from "./Components/Admin/DashboardAdmin";
import ListEditeurs from "./Components/Editeurs/ListEditeurs";
import Register from "./Components/Admin/Register";
import Login from "./Components/Admin/Login";
import Logout from "./Components/Admin/Logout";
import Home from "./Components/Home/Home";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />}></Route>
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<DashboardAdmin />}></Route>
            <Route path="/admin/livres" element={<ListLivres />}></Route>
            <Route path="/admin/auteurs" element={<ListAuteurs />}></Route>
            <Route path="/admin/editeurs" element={<ListEditeurs />}></Route>
          </Route>

          <Route path="auth/logout" element={<Logout />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
