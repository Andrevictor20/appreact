import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/foto.jpg'
import Head from './Head'
const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}> 
      <Head titulo="Enterprise | Contato" descricao="Entre em contato"/>
      <img src={foto} alt="Contato" />
      <div>
          <h1>Entre em contato:</h1>
          <ul className={styles.dados}>
            <li>+55 21 99999-9999</li>
            <li>9WQp6@example.com</li>
            <li>Rua Ali Perto, 35</li>
          </ul>
      </div>
    </section>
  )
}

export default Contato
