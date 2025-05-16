import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layotuts
import MainLayout from "./layouts/MainLayout";

// main pages
import Nazariy from "./pages/Nazariy";
import Amaliy from "./pages/Amaliy";
import Glossariy from "./pages/Glossariy";
import Nazorat from "./pages/Nazorat";
import NoDirect from "./pages/NoDirect";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";

import Admin from "./pages/Admin/Admin";
import AdminLayout from "./layouts/AdminLayout";
import Tests from "./pages/Admin/Tests";
import Users from "./pages/Admin/Users";
import Expect from "./pages/Admin/Expect";
import Reality from "./pages/Admin/Reality";
import Habarlar from "./pages/Habarlar";
import Leaderborad from "./pages/Leaderborad";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PriveteRoute";
import News from "./pages/Admin/News";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="nazariy"
              element={
                <PrivateRoute>
                  <Nazariy />
                </PrivateRoute>
              }
            />
            <Route
              path="amaliy"
              element={
                <PrivateRoute>
                  <Amaliy />
                </PrivateRoute>
              }
            />
            <Route
              path="nazorat"
              element={
                <PrivateRoute>
                  <Nazorat />
                </PrivateRoute>
              }
            />
            <Route
              path="glossariy"
              element={
                <PrivateRoute>
                  <Glossariy />
                </PrivateRoute>
              }
            />
            <Route
              path="news"
              element={
                <PrivateRoute>
                  <Habarlar />
                </PrivateRoute>
              }
            />
            <Route
              path="reyting"
              element={
                <PrivateRoute>
                  <Leaderborad />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
          <Route
              index
              element={
                <AdminRoute>
                  <Users />
                </AdminRoute>
              }
            />
            <Route
              path="users"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
            <Route
              path="news"
              element={
                <AdminRoute>
                  <News />
                </AdminRoute>
              }
            />
            <Route
              path="nazariy"
              element={
                <AdminRoute>
                  <Expect />
                </AdminRoute>
              }
            />
            <Route
              path="amaliy"
              element={
                <AdminRoute>
                  <Reality />
                </AdminRoute>
              }
            />
            <Route
              path="tests"
              element={
                <AdminRoute>
                  <Tests />
                </AdminRoute>
              }
            />
          </Route>

          {/* Login / Register ochiq */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NoDirect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
