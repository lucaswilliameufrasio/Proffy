import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/34021576?v=4"
          alt="Lucas William"
        />

        <div>
          <strong>Lucas William</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Entusiasta dos métodos computacionais da Física Computacional. (Quem
        dera)
        <br />
        <br />
        Adora desprezar a resistência do ar e esquecer de converter a unidade.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 400,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp icon" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
