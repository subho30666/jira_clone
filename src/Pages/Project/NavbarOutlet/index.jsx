import React, { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { LeftAside } from "./style";
import Collapsible from "../../../components/Collapsible/index";
import { JiraIcon, SearchIcon, PlusIcon, QuestionIcon } from "../../../components/Icons";
import CreateIssue from "../CreateIssue/CreateIssue";
import SearchIssues from "./SearchIssue/Search_Issues_Modal";

function NavbarOutlet() {
  let [searchParams, setSearchParams] = useSearchParams();

  const [searchIssueModalOpen, setSearchIssueModalOpen] = useState(false);

  const openModal = () => setSearchIssueModalOpen(true);
  const closeModal = () => setSearchIssueModalOpen(false);

  function SetSearchQuery() {
    // console.log(searchParams);
    setSearchParams({ ...searchParams, OpenModal: "true" });
  }

  return (
    <>
      <LeftAside>
        <Collapsible>
          <Collapsible.Header>
            <Collapsible.Icon>
              <JiraIcon />
            </Collapsible.Icon>
          </Collapsible.Header>

          <Collapsible.Content onClick={openModal}>
            <Collapsible.Icon>
              <SearchIcon />
            </Collapsible.Icon>
            <Collapsible.Text>Search</Collapsible.Text>
          </Collapsible.Content>

          <Collapsible.Content onClick={SetSearchQuery}>
            <Collapsible.Icon>
              <PlusIcon />
            </Collapsible.Icon>
            <Collapsible.Text>Create Issue</Collapsible.Text>
          </Collapsible.Content>

          <Collapsible.Footer>
            <Collapsible.Icon>
              <QuestionIcon />
            </Collapsible.Icon>

            <Collapsible.Text>About</Collapsible.Text>
          </Collapsible.Footer>
        </Collapsible>
      </LeftAside>
      {searchIssueModalOpen ? <SearchIssues show={searchIssueModalOpen} onClose={closeModal} /> : null}
      <Outlet />
      <CreateIssue />
    </>
  );
}

export default NavbarOutlet;
