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

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (
          <>
            <DashboardAdmin />
          </>
        ) : null}
        <Routes>
          {isLoggedIn ? (
            <>
            <Route path="/admin/dashboard" element={<DashboardAdmin />}></Route>
              <Route path="/admin/livres" element={<ListLivres />}></Route>
              <Route path="/admin/auteurs" element={<ListAuteurs />}></Route>
              <Route path="/admin/editeurs" element={<ListEditeurs />}></Route>
            </>
          ) : (
            <Route path="auth/login" element={<Login />}></Route>
          )}
          <Route path="auth/register" element={<Register />}></Route>

          <Route path="auth/logout" element={<Logout />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutSuccess />} />
          <Route path="/pdfcart" element={<PdfCart />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
