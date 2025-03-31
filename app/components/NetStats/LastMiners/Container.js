import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  // min-width: 230px;
  // max-width: 230px;

  @media (max-width: 768px) {
    min-width: 200px;
    max-width: 200px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    max-width: 100%;
    padding: 0 10px;
  }
`;

export default Container;
