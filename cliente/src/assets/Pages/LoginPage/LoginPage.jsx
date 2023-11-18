import React from 'react'
import styles from './LoginPage.module.css'
import imageRegister from '../../../../public/images/image-register.svg'
import LoginForm from '../../Components/LoginForm/LoginForm'

export default function LoginPage() {
    
  return (
    <>
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.formImage}>
                <img src={imageRegister} className={styles.imgRegister} />
            </div>
            <div className={styles.form}>
                <LoginForm />
            </div>
        </div>
        
    </div>
    </>
  )
}