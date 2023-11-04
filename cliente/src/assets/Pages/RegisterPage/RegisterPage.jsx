import React from 'react'
import styles from './RegisterPage.module.css'
import imageRegister from '../../../../public/images/image-register.svg'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'

export default function RegisterPage() {
    
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.formImage}>
                <img src={imageRegister} className={styles.imgRegister} />
            </div>
            <div className={styles.form}>
                <RegisterForm />
            </div>
        </div>
    </div>
  )
}
