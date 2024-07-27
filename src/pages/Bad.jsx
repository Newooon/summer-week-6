import { useState } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  background: gray;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 390px;
  background-color: #fcfaf7;
`;

function Bad() {
  return (
    <>
      <Layout>
        <Wrapper>Bad</Wrapper>
      </Layout>
    </>
  );
}

export default Bad;
