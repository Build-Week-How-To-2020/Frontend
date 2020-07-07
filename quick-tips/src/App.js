import React from "react";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Form from './components/SignUpForm';
import {Route, Link } from 'react-router-dom';
import Howtos from "./components/Howtos";

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
    <>
    <Container>
      <div className="App">
      <Header/>
     
      </div>
    </Container>
    <Container>
    <Route path="/login" component ={LoginForm}></Route>
    <Route path="/signup" component ={Form}></Route>
    <Route path="/howtos" component={Howtos}></Route>

    </Container>

    </>
  );
}

export default App;
