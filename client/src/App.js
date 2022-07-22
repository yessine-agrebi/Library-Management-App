import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListLivres from "./Components/Livres/ListLivres";
import ListAuteurs from "./Components/Auteurs/ListAuteurs";
import DashboardAdmin from "./Components/Admin/DashboardAdmin";
import ListEditeurs from "./Components/Editeurs/ListEditeurs";
import Register from "./Components/Admin/Register";
import { useSelector } from "react-redux";
import Login from "./Components/Admin/Login";
import Logout from "./Components/Admin/Logout";
import Home from "./Components/Home/Home";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <DashboardAdmin />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/livres"
            element={
              <AdminRoute>
                <ListLivres />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/auteurs"
            element={
              <AdminRoute>
                <ListAuteurs />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/admin/editeurs"
            element={
              <AdminRoute>
                <ListEditeurs />
              </AdminRoute>
            }
          ></Route>
          <Route path="auth/logout" element={<Logout />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
