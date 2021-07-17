import React from 'react';

// styles
import styled from 'styled-components';

// assets
import LoadingGif from '@assets/loading.gif';

const Loading = () => {
  return (
    <Container>
      <Loader src={LoadingGif} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.img`
  width: 60px;
`;

export default Loading;
