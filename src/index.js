import React from "react";
import ReactDOM from "react-dom/client";
import "./font.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 393px;
  max-height: 768px;
  margin: 0 auto;
  //padding: 2rem;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppContainer>
      <AppRouter />
    </AppContainer>
  </Router>,
);

reportWebVitals();
