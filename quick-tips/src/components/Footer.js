import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  align-items: center;
  justify-content: center;
  color: #eee;
  background: #242582;
  width: 100%;
  padding: 20px 0;
  display: flex;
`;

function Footer() {
  return (
    <>
      <Foot>
        <p> © QuickTricks 2020</p>
      </Foot>
    </>
  );
}

export default Footer;
