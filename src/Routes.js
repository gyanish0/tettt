import React from "react";
import EditProfile from "pages/EditProfile";
import LoginPage from "pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
