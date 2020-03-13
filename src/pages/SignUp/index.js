import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimo de 3 caracteres')
      .required('Nome obrigatório!'),
    email: Yup.string()
      .email('Insira um email válido!')
      .required('E-mail obrigatório!'),
    password: Yup.string()
      .min(6, 'Minimo de 6 caracteres')
      .required('Senha obrigatória!'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/"> Já tenho login </Link>
      </Form>
    </>
  );
}
