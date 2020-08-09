import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import logoImg from '../../../assets/images/logo.svg'

import landingImg from '../../../assets/images/landing.svg'

import switchButton from '../../../assets/images/icons/switch-button.svg'

import './styles.css'

interface IHeaderProps {
  description?: string
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = ({ description, children }) => {
  return (
    <header className="landing-page-header">
      <div className="top-bar-container">
        <div className="user-container">
          <Link to="/">
            <img
              src="https://github.com/lucaswilliameufrasio.png"
              alt="Proffy Logo"
            />
            <span>Lucas William</span>
          </Link>
        </div>

        <Link to="/" className="logout-button">
          <img src={switchButton} alt="Logout" />
        </Link>
      </div>

      <div className="logo-container">
        <img src={logoImg} alt="Proffy" />
        <h2>Sua plataforma de estudos online.</h2>
      </div>

      <img src={landingImg} alt="Platforma de estudos" className="hero-image" />
    </header>
  )
}

Header.propTypes = {
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Header
