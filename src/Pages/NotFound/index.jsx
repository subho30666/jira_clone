// src/components/NotFound.js
import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 50px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 100px;
  margin: 0;
  color: #333;
`;

const Message = styled.p`
  font-size: 24px;
  color: #666;
`;

const BackLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>Oops! The page you’re looking for doesn’t exist.</Message>
      <BackLink href="https://subho30666.github.io/jira_clone">Go back to Jira Home</BackLink>
    </NotFoundContainer>
  );
};

export default NotFound;
