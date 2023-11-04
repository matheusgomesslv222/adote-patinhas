import React from 'react'
import styles from './RegisterForm.module.css'
import { useNavigate } from 'react-router-dom'


export default function RegisterForm() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/login')
    }
  return (
    <div className={styles.main}>
         <form action="#">
                <div className={styles.formHeader}>
                    <div className={styles.title}>
                        <h1>Cadastre-se</h1>
                    </div>
                    <div className={styles.loginButton}>
                        <button className={styles.registerBtn} onClick={handleClick}>Login</button>
                    </div>
                </div>
    
                <div className={styles.inputGroup}>
                    <div className={styles.inputBox}>
                        <label >Primeiro Nome</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required />
                    </div>
    
                    <div className={styles.inputBox}>
                        <label >Sobrenome</label>
                        <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required />
                    </div>
                    <div className={styles.inputBox}>
                        <label >E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
                    </div>
    
                    <div className={styles.inputBox}>
                        <label>Número de telefone</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required />
                    </div>
    
                    <div className={styles.inputBox}>
                        <label >Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
                    </div>
    
    
                    <div className={styles.inputBox}>
                        <label >Confirme sua Senha</label>
                        <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Digite sua senha novamente" required />
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
                    <button id="cadastro-feito">Continuar</button>
                </div>
        </form>
    </div>
  )
}
