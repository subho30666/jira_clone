// src/components/ErrorHandler.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled components for the ErrorPage
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const ErrorTitle = styled.h1`
  font-size: 120px;
  font-weight: bold;
  margin: 0;
  color: #e74c3c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ErrorSubtitle = styled.h2`
  font-size: 36px;
  font-weight: 300;
  color: #333;
  margin: 20px 0;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0 0 30px 0;
  text-align: center;
  max-width: 600px;
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
// ErrorPage component
const ErrorPage = ({ error }) => (
  <ErrorContainer>
    <ErrorTitle>500</ErrorTitle>
    <ErrorSubtitle>Oops! Something went wrong.</ErrorSubtitle>
    <ErrorMessage>{error || "An unexpected error occurred. Please try again later."}</ErrorMessage>
    <BackLink href="https://subho30666.github.io/jira_clone">Go back to Home</BackLink>
  </ErrorContainer>
);

// ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error.toString()} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
