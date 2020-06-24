import React from "react";
// import "./header.css";
import styled from "styled-components";

const Head = styled.head`
  display: flex;
  justify-content: space-between;
  background-color: #242582;
  color: #eee;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 10px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  padding-top: 10px;
  color: #eee;
`;

const Anchor = styled.a`
  color: #eee;
  font-size: 1rem;
  margin-left: 20px;
  transition: 0.5s;
  text-decoration: none;
  font-family: "Sriracha", cursive;
`;

function Header() {
  return (
    <>
      <Head>
        <div class="navtitle">
          <h1>QuickTricks</h1>
          <h5>For Life</h5>
        </div>
        <Nav>
          <Anchor href="index.html" class="active">
            Home
          </Anchor>
          <Anchor href="about.html">About Us</Anchor>
          <Anchor href="categories.html">Categories</Anchor>
          <Anchor href="faq.html">FAQ</Anchor>
          <Anchor href="contact.html">Contact</Anchor>
          <Anchor href="careers.html">Careers</Anchor>
          <Anchor href="login.html">Login</Anchor>
        </Nav>
      </Head>
    </>
  );
}

export default Header;
