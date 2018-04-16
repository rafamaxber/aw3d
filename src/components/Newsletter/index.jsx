import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '../Shared';

const Wrapper = styled.div`
  background-color: #363636;
`;

const WrapperContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Text = styled.div`
  font-size: 2.1em;
  width: 60%;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;
const Input = styled.input`
  height: 40px;
  padding: 15px;
  width: 70%;
  font-size: 1.8em;
  :focus {
    outline: none;
    border: none;
  }
`;
const Button = styled.button`
  width: 28%;
  font-size: 1.8em;
  text-transform: uppercase;
  border: none;
  background-color: #f8d322;
  color: #000;
  font-weight: bold;
  cursor: pointer;
`;

const Newsletter = () => (
  <Wrapper>
    <WrapperContainer>
      <Text>
        Assine nossa Newsletter. Inscreva-se para receber notícias e ofertas exclusivas!
      </Text>
      <Form>
        <Input placeholder="Digite seu e-mail" type="email" id="email" name="email" required="true" />
        <Button type="submit">Enviar</Button>
      </Form>
    </WrapperContainer>
  </Wrapper>
);

export default Newsletter;
