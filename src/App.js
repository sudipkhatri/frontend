import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./Store";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//import ErrorBoundary from "./ErrorBoundary"; // Assume you have an ErrorBoundary component
import Loader from "./Loader"; // A Loader component for Suspense fallback
import AddPost from "./Components/UserComp/AddPost";

// Lazy load components only load component when used
const Home = React.lazy(() => import("./Components/Home/Home"));
const Auth = React.lazy(() => import("./Components/Auth"));
const Dashboard = React.lazy(() => import("./Components/UserComp/Dashboard"));
const MyPost = React.lazy(() => import("./Components/UserComp/MyPost"));
const AllProperty = React.lazy(() => import("./Components/UserComp/AllPorperty"));
const Contact = React.lazy(() => import("./Components/Contact"));
const About = React.lazy(() => import("./Components/About"));
const Update = React.lazy(() => import("./Components/UserComp/Update"));
const Error = React.lazy(() => import("./Components/Error"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return (
    // <ErrorBoundary>
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={"/frontend"} element={<Home />} />
            <Route path="/frontend/rent" element={<AllProperty />} />
            {!isLoggedIn ? (
              <>
                <Route path="/frontend/login" element={<Auth />} />
                <Route path="/frontend/contact" element={<Contact />} />
                <Route path="/frontend/about" element={<About />} />
              </>
            ) : (
              <>
                <Route path="/frontend/dash" element={<Dashboard />} />
                <Route path="/frontend/add" element={<AddPost />} />
                <Route path="/frontend/mypost" element={<MyPost />} />
                <Route path="/frontend/post/update/:id" element={<Update />} />
              </>
            )}
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    // </ErrorBoundary>
  );
}

export default App;
