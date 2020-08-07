import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'

import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface IPageHeaderProps {
  title: string
  children?: React.ReactNode
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar para página inicial" />
        </Link>

        <img src={logoImg} alt="Proffy Logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageHeader
