import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MainContent, MainLayout } from "./style";
import LeftMenu from "./LeftMenu/index";
import { users, container, project, items, comments } from "../../Data/data";
import { setLocal, getLocal } from "../../Utils/localstorage";

function Project() {
  const navigate = useNavigate();
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const Users = getLocal("users");

    if (!Users) {
      setLocal(users, "users");
      setLocal(container, "container");
      setLocal(project, "project");
      setLocal(items, "items");
      setLocal(comments, "comments");
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      // Only navigate to "/project/board" if not already on a more specific route
      if (location.pathname === "/project") {
        navigate("/project/board", { replace: true });
      }
    }
  }, [initialized, navigate, location.pathname]);

  return (
    <>
      <MainLayout>
        <LeftMenu></LeftMenu>
        <MainContent>
          <Outlet />
        </MainContent>
      </MainLayout>
    </>
  );
}

export default Project;
