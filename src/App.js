import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/footer/Footer";

import Home from "./pages/Home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import "./components/ScrollReveal/ScrollReveal.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/projects/:slug"
            element={
              <>
                <Header />
                <ProjectDetails />
                <Footer />
              </>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
