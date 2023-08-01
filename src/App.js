/** @format */

/** @format */

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import AccountPage from "./pages/AccountPage";
import Logout from "./pages/Logout";
import HomePage from "./pages/HomePage";
import Discover from "./pages/Discover";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import CourseDetails from "./Components/CourseDetails";
import { useMediaQuery } from "react-responsive";

function MainApp() {
  const isSidebarOpen = useSelector(
    (state) => state.sidebar.sidebar.isSidebarOpen
  );
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div
          className={`w-full transform transition-transform duration-500 ease-in-out ${
            isSidebarOpen && !isSmallScreen
              ? "ml-56  "
              : ""
          }`}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/help-support" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


function App() {
  return (
    <main>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </main>
  );
}

export default App;
