import React from 'react'
import styles from './LoginForm.module.css'
import { useNavigate } from 'react-router-dom'
import {Formik, Form , Field} from 'formik'
import * as yup from 'yup';
import Axios from 'axios';
 
export default function LoginForm() {
    const navigate = useNavigate()
    const handleClick = async (values) =>{
            Axios.post("http://localhost:3000/login", {
              email: values.email,
              senha: values.senha,
            }).then((response) => {
                navigate('/home')
            });

    }
    const validationLogin = yup.object().shape({
        email: yup.string().email().required(),
        senha: yup.string().min(4, 'minimo 4').required()
    })


  return (
    <div className={styles.main}>
        <Formik initialValues={{
            email: '',
            senha: ''
        }} onSubmit={handleClick} validationSchema={validationLogin}>
            <Form>
            <div className={styles.formHeader}>
                            <div className={styles.title}>
                                <h1>Login</h1>
                            </div>
                            <div className={styles.loginButton}>
                                <button className={styles.registerBtn} onClick={handleClick}>Cadastrar</button>
                            </div>
                        </div>
            
                        <div className={styles.inputGroupLogin}>
                            <div className={styles.inputBox}>
                                <label>E-mail</label>
                                <Field name='email' id="email" placeholder="Digite seu e-mail"/>

                            </div>
            
                            <div className={styles.inputBox}>
                                <label>Senha</label>
                                <Field name='senha' id="senha" placeholder="Digite seu senha"/>
                            </div>
                            <div className={styles.continueButton}>
                                <button type='submit' id={styles.loginButton}>Login</button>
                            </div>
                        </div>          
            </Form>
        </Formik>
    </div>
  )
}
