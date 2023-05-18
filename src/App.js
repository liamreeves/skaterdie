import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Dice from "./pages/Dice";
import Navbar from "./components/Navbar";
import AddTrick from "./pages/AddTrick";
import Footer from "./components/Footer";
import MyTricks from "./pages/MyTricks";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dice />} />
        <Route path="add" element={<AddTrick />} />
        <Route path="tricks" element={<MyTricks />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className=" h-full">
      <Navbar />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
