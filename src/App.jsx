import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import NavbarOutlet from "./Pages/Project/NavbarOutlet/index";
import Project from "./Pages/Project";
import Board from "./Pages/Project/Board";
import ProjectSettings from "./Pages/Project/ProjectSettings";
import NotFound from "./Pages/NotFound";
import ErrorBoundary from "./Pages/Error";
import IssuesOnClickModal from "./Pages/IssuesOnClickModal";
import { ToastProvider } from "./components/Toast";

function App() {
  return (
    <>
      <ToastProvider>
        <BrowserRouter basename="/jira_clone">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/project" element={<NavbarOutlet />}>
                <Route path="/project" element={<Project />}>
                  <Route path="/project/board" element={<Board />}>
                    <Route path="/project/board/:items" element={<IssuesOnClickModal />} />
                  </Route>
                  <Route path="/project/settings" element={<ProjectSettings />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </ToastProvider>
    </>
  );
}

export default App;
