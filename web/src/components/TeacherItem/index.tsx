import React from 'react'

import PropTypes from 'prop-types'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface ITeacher {
  cost: Number
  subject: string
  user: {
    id: Number
    name: string
    bio: string
    avatar: string
    whatsapp: string
  }
}

interface ITeacherItemProps {
  teacher: ITeacher
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.user.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.user.avatar} alt={teacher.user.name} />

        <div>
          <strong>{teacher.user.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.user.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.user.whatsapp}`}
          type="button"
        >
          <img src={whatsappIcon} alt="Whatsapp icon" />
          Entrar em Contato
        </a>
      </footer>
    </article>
  )
}

TeacherItem.propTypes = {
  teacher: PropTypes.shape({
    cost: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      whatsapp: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default TeacherItem
