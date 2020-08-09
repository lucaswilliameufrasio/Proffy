import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import api from '../../services/api'
import Header from './Header'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    async function fetchTotalConnections() {
      const {
        data: { total }
      } = await api.get('connections')

      setTotalConnections(total)
    }

    fetchTotalConnections()
  }, [])

  return (
    <div id="page-landing">
      <Header />

      <div id="page-landing-content" className="container">
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="greetings">
          Seja bem-vindo. <br />
          <strong>O que deseja fazer?</strong>
        </span>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
        
      </div>
    </div>
  )
}

export default Landing
