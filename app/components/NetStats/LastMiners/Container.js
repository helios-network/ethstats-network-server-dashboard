import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export default Container;
