import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import ImagesState from "./context/ImagesState";
import { AuthProvider, useAuth } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
    return (
        <>
            <ImagesState>
                <Router>
                    <AuthProvider>
                        <Navbar />
                        <Routes>
                            <Route
                                path="/contact"
                                element={<Contact />}
                                exact
                            />
                            <Route
                                path="/gallery"
                                element={<Gallery />}
                                exact
                            />
                            <Route path="/" element={<Home />} exact />
                            <Route path="/login" element={<Login />} exact />

                            <Route
                                path="/admin"
                                element={
                                    <PrivateRoute>
                                        <Admin />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                        <Footer />
                    </AuthProvider>
                </Router>
            </ImagesState>
        </>
    );
}

export default App;
