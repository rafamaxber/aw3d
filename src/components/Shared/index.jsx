import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  position: relative;
  padding: 0 20px;
`;

export const Main = styled.div`
  padding-top: 50px;
  z-index: 0;
  position: relative;
`;

export const Title = styled.div`
  text-align: center;
  padding: 50px 0 30px;
  h1, h2, h3, h4 {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-size: 2.5em;
  }
`;

export const Btn = styled.a`
  background: #f8d322;
  border: none;
  border-radius: 4px;
  color: #000;
  display: inline-block;
  white-space: nowrap;
  padding: 8px 18px;
  text-decoration: none;
  position: relative;
  border-bottom: none;
  font-size: 1.6em;
  cursor: pointer;
`;
