
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Help from './pages/Help';
import Settings from './pages/Settings';
import AccountPage from './pages/AccountPage';
import Logout from './pages/Logout';
import HomePage from './pages/HomePage';
import Discover from './pages/Discover';
import Messages from './pages/Messages';
import CourseDetails from './Components/CourseDetails';
function App() {
  return (
    <main>
      <Provider store={store}>
        <Router>
          <div className="flex">
            <Sidebar />
            <div className=" w-full">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/courses/:id" element={<CourseDetails/>}/>
                <Route path="/help-support" element={<Help />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
