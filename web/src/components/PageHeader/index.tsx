import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'

import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface IPageHeaderProps {
  title: string
  pageTitle?: string
  description?: string
  headerRight?: React.ReactNode
  children?: React.ReactNode
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  pageTitle,
  description,
  headerRight,
  children
}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar para página inicial" />
        </Link>
        <span>{pageTitle}</span>
        <img src={logoImg} alt="Proffy Logo" />
      </div>

      <div className="header-content">
        <div className="header-left-content">
          <strong>{title}</strong>
          {description && <p>{description}</p>}

          {children}
        </div>

        {headerRight && (
          <div className="header-right-content">{headerRight}</div>
        )}
      </div>
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  headerRight: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageHeader
