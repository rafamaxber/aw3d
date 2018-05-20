import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '../Shared';

const Wrapper = styled.div`
  background-color: #363636;
  color: #fff;
`;

const WrapperContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  @media (max-width: 760px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Text = styled.div`
  font-size: 2.1em;
  width: 60%;
  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    width: 98%;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 40%;
  @media (max-width: 760px) {
    width: 80%;
    max-width: 360px;
  }
  @media (max-width: 400px) {
    width: 98%;
  }
`;
const Input = styled.input`
  height: 40px;
  padding: 15px;
  width: 70%;
  font-size: 1.8em;
  margin: 0 5px;
  border-radius: 4px;
  outline: none;
  border: none;

  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  background: #f8d322;
  border: none;
  border-radius: 4px;
  color: #000;
  display: inline-block;
  white-space: nowrap;
  padding: 8px 35px;
  text-decoration: none;
  position: relative;
  border-bottom: none;
  font-size: 2em;
  cursor: pointer;
`;

const Newsletter = () => (
  <Wrapper>
    <WrapperContainer>
      <Text>Assine nossa Newsletter. Inscreva-se para receber notícias e ofertas exclusivas!</Text>
      <Form
        action="https://aw3d.us15.list-manage.com/subscribe/post?u=b7d57283fb282c79fa4c323f4&amp;id=6a6d140da9"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          id="mce-EMAIL"
          name="EMAIL"
          required="true"
        />
        <Button type="submit" name="subscribe" id="mc-embedded-subscribe">
          Enviar
        </Button>
      </Form>
    </WrapperContainer>
  </Wrapper>
);

export default Newsletter;
