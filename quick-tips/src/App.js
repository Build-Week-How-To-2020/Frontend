import React from "react";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Form from './components//SignUpForm';
import {Route, Link } from 'react-router-dom';
const Container = styled.body`
  display: flex;
  justify-content: center;
  width: 100%;
`;

function App() {
  return (
    <>
    <Container>
      <div className="App">
      <Header/>
     
      </div>
    </Container>
    <Container>
    <Route path="/login" component ={LoginForm}></Route>
    <Route path="/signup" component ={Form}></Route>

    </Container>

    </>
  );
}

export default App;
