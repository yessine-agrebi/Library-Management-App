import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import AdminNavbar from "./components/admin/AdminNavbar";
import AdminSidebar from "./components/admin/AdminSidebar";
import DashboardAdmin from "./components/admin/DashboardAdmin";
import ListCategories from "./components/Categories/ListCategories";
import ListScategories from "./components/Scategories/ListScategories";
import ListArticles from "./components/Articles/ListArticles";
import Login from "./components/admin/Login";
import Logout from "./components/admin/Logout";
import Register from "./components/admin/Register";
import "./App.css";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import CheckoutSuccess from "./components/Checkout/CheckoutSuccess";
import PdfCart from "./components/Checkout/PdfCart";
function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <>
    <Router>
      {isLoggedIn ? (
        <>
          {" "}
          <AdminNavbar />
        </>
      ) : null}
      
        <Routes>
          <Route
            path="/admin/categories/listcat"
            element={<ListCategories />}
          />
          <Route
            path="/admin/scategories/listscat"
            element={<ListScategories />}
          />
          <Route path="/admin/articles/listart" element={<ListArticles />} />
          {isLoggedIn ? (
            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          ) : (
            <Route path="/admin/dashboard" element={<Login />} />
          )}
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutSuccess />} />
          <Route path="/pdfcart" element={<PdfCart />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
