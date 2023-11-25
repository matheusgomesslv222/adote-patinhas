
import React from 'react';
import styles from './Footer.module.css'; // Certifique-se de ter um arquivo de estilo (Footer.module.css)

const Footer = () => {
  return (
    <footer>
    <div className={styles.container}>
      <div className={styles.footerInfo}>
        <div className={styles.contactInfo}>
          <h3>Entre em Contato</h3>
          <p><a href="mailto:bookmapper61@gmail.com">Email: bookmapper61@gmail.com</a></p>
          <p>Telefone: (123) 456-7890</p>
        </div>
        <div className={styles.socialMedia}>
          <h3>Siga-nos</h3>
          <a href="#" target="_blank">Facebook</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2023 Seu Site. Todos os direitos reservados.</p>
      </div>
    </div>

    <div className="team-members">
      <h3>Equipe</h3>
      <div className={styles.member}>Matheus</div>
      <div className={styles.member}>Isabela</div>
      <div className={styles.member}>Rodrigo</div>
      <div className={styles.member}>Toledo</div>
      <div className={styles.member}>Felipe</div>
    </div>
  </footer>
  );
};

export default Footer;
