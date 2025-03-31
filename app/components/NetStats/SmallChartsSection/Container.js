import styled from 'styled-components';

const Container = styled.div`
  padding: 40px 52px 16px 36px;
  display: flex;
  justify-content: space-between;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #FFF;

  @media (max-width: 768px) {
    padding: 20px 20px 16px;
  }

  @media (max-width: 480px) {
    padding: 16px 10px 12px;
    flex-direction: column;
    gap: 16px;
  }
`;

export default Container;
