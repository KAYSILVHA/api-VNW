import styled from 'styled-components';

export const CardContainer = styled.section`
  display: flex;
  width: 60%;
  height: auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 20px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  height: auto;
  background-color: #cbcbcb40;
  color: white;
  border-radius: 2rem;
  border: none;
`;

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  padding: 20px;
  gap: 10px;
  font-size: 1.3rem;
`;

export const Imagem = styled.img`
  width: 300px;
  height: 100%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;