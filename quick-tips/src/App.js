import React from "react";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const Container = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-top: 0;
  margin-left: 20%;
  margin-right: 20%;
  margin-botton: 0%;
`;

function App() {
  return (
    <Container>
      <Header />
      <LoginForm />
      <Footer />
    </Container>
  );
}

export default App;
