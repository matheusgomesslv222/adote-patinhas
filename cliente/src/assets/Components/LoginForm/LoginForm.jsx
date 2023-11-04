import React from 'react'
import styles from './LoginForm.module.css'
import { useNavigate } from 'react-router-dom'


export default function LoginForm() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/')
    }
  return (
    <div className={styles.main}>
        <form action="#">
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
                                <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
                            </div>
            
                            <div className={styles.inputBox}>
                                <label>Senha</label>
                                <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
                            </div>
                            <div className={styles.continueButton}>
                                <button id={styles.loginButton}>Login</button>
                            </div>
                        </div>           
                </form>
    </div>
  )
}
