import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  const navigate = useNavigate();

  const registerRedirect = () => {
    navigate('/book-mapper/login');
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Enviar os dados do formulário para o ponto de extremidade da API usando Axios
      const response = await Axios.post('http://localhost:3000/cadastro', values);
  
      // Tratar a resposta da API conforme necessário
      if (response.status === 200) {
        console.log('Usuário cadastrado com sucesso.');
        // Aqui você pode redirecionar para a página de login ou executar outras ações após o cadastro bem-sucedido
        registerRedirect();
      } else {
        console.error('Erro ao cadastrar usuário:', response.data.message);
        // Aqui você pode exibir uma mensagem de erro ou tomar outras medidas apropriadas para um cadastro mal-sucedido
      }
    } catch (error) {
      console.error('Erro durante a submissão do formulário:', error);
  
      // Aqui você pode tratar erros específicos, como erro de conexão ou outros erros inesperados
    } finally {
      setSubmitting(false);
    }
  };
  

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    sobrenome: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    telefone: Yup.string(),
    senha: Yup.string().min(4, 'A senha deve ter pelo menos 6 caracteres').required('Campo obrigatório'),
    confirm_senha: Yup.string()
      .oneOf([Yup.ref('senha'), null], 'Senhas não coincidem')
      .required('Campo obrigatório'),
    
  });
  

  return (
    <div className={styles.main}>
      <Formik
        initialValues={{
          nome: '',
          sobrenome: '',
          email: '',
          telefone: '',
          senha: '',
          confirm_senha: '',
          
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className={styles.formHeader}>
            <div className={styles.title}>
              <h1>Cadastrar</h1>
            </div>
            <div className={styles.loginButton}>
              <button className={styles.registerBtn} onClick={registerRedirect}>
                Login
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label>Primeiro Nome</label>
              <Field type="text" name="nome" placeholder="Digite seu primeiro nome" required />
            </div>

            <div className={styles.inputBox}>
              <label>Sobrenome</label>
              <Field type="text" name="sobrenome" placeholder="Digite seu sobrenome" required />
            </div>
            <div className={styles.inputBox}>
              <label>E-mail</label>
              <Field type="email" name="email" placeholder="Digite seu e-mail" required />
            </div>

            <div className={styles.inputBox}>
              <label>Número de telefone</label>
              <Field type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" required />
            </div>

            <div className={styles.inputBox}>
              <label>Senha</label>
              <Field type="password" name="senha" placeholder="Digite sua senha" required />
            </div>

            <div className={styles.inputBox}>
              <label>Confirme sua Senha</label>
              <Field type="password" name="confirm_senha" placeholder="Digite sua senha novamente" required />
            </div>
          </div>

          <div className={styles.genderInputs}>
                    <div className={styles.genderTitle}>
                        <h4>Gênero:</h4>
                    </div>
    
                    <div className={styles.genderGroup}>
                        <div className={styles.genderInput}>
                            <input id="female" type="radio" name="gender" />
                            <label>Feminino</label>
                        </div>
    
                        <div className={styles.genderInput}>
                            <input id="male" type="radio" name="gender" />
                            <label>Masculino</label>
                        </div>
    
                        <div className={styles.genderInput}>
                            <input id="others" type="radio" name="gender" />
                            <label>Outros</label>
                        </div>
    
                        <div className={styles.genderInput}>
                            <input id="none" type="radio" name="gender" />
                            <label>Prefiro não dizer</label>
                        </div>
                    </div>
                </div>

          <div className={styles.continueButton}>
            <button type="submit" id="cadastro-feito">
              Continuar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
