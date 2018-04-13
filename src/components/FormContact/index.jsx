import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Shared';

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto 30px;
`;

const Field = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 1.7em;
  display: block;
  margin-bottom: 10px;
`;

const inputStyle = `
  display: block;
  padding: 5px 10px;
  font-size: 1.5em;
  width: 100%;
  border: 1px solid #bdbdbd;
`;

const Input = styled.input`
  height: 50px;
  ${inputStyle};
`;

const Textarea = styled.textarea`
  ${inputStyle};
`;

const BtnButton = Btn.withComponent('button');

const BtnSend = BtnButton.extend`
  margin-top: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FormContact = () => {
  return (
    <Form>
      <Field>
        <Label>
          Nome*
        </Label>
        <Input placeholder="Jonh Due" type="text" id="nome" name="nome" required="true" />
      </Field>

      <Field>
        <Label>
          E-mail*
        </Label>
        <Input placeholder="jonh@gmail.com" type="email" id="email" name="email" required="true" />
      </Field>

      <Field>
        <Label>
          Comentário*
        </Label>
        <Textarea placeholder="Olá gostaria de saber mais sobre a GTMax3D..." id="comentario" name="comentario" required="true" rows="6" />
      </Field>
      <ButtonWrapper>
        <BtnSend type="submit">
          Enviar
        </BtnSend>
      </ButtonWrapper>
    </Form>
  );
};

export default FormContact;

/*
<form>
  <div>
    <label htmlFor="nome">Nome*</label>
    <input type="text" required="true" id="nome" name="nome" />
  </div>
  <div>
    <label htmlFor="email">E-mail*</label>
    <input type="email" name="email" id="email" required="true" />
  </div>
  <div>
    <label htmlFor="comentario">Comentário*</label>
    <textarea name="comentario" id="comentario" />
  </div>
  <button type="submit">Enviar</button>
</form>;
*/
