import React, { useState, useEffect } from "react";
import { ModalContainer, Overlay, CloseButton, Input, SubText, StyledIssues, Text, Flex } from "./style";
import { getLocal } from "../../../../Utils/localstorage";
import ItemIcon from "../../Board/DndIssues/ItemIcon";

function SearchIssues({ show, onClose, children }) {
  const [issues, setIssues] = useState(getLocal("items") || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIssues, setFilteredIssues] = useState(issues);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const result = issues.filter((issue) => (issue.title && issue.title.toLowerCase().includes(query)) || (issue.description && issue.description.toLowerCase().includes(query)));
    setFilteredIssues(result);
  }, [searchQuery, issues]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500); // Match this with your animation duration
  };

  return (
    <Overlay $show={show || isClosing}>
      <ModalContainer $show={show && !isClosing}>
        <CloseButton onClick={handleClose}>X</CloseButton>
        {children}
        <Input placeholder="Search issues by summary, description" value={searchQuery} onChange={handleInputChange} />
        <SubText>Issues</SubText>

        {filteredIssues.map((issue) =>
          issue.id && issue.type && issue.type.value ? (
            <StyledIssues key={issue.id} to={`/project/board/${issue.id}`} onClick={handleClose}>
              <ItemIcon icon={issue.type.value} size={"25px"} />
              <Flex>
                <Text>{issue.title || "No title"}</Text>
                <Text>id: {issue.id}</Text>
              </Flex>
            </StyledIssues>
          ) : null
        )}
      </ModalContainer>
    </Overlay>
  );
}

export default SearchIssues;
