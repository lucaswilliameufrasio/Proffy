import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import doneIcon from '../../assets/images/icons/done.svg'
import successBgImg from '../../assets/images/success-background.svg'

import './styles.css'

interface ISuccessScreenProps {
  message: string
  description: string
  to: string
  buttonText: string
}

const SuccessScreen: React.FC<ISuccessScreenProps> = ({
  message,
  description,
  to,
  buttonText
}) => {
  return (
    <div className="success-container">
      <div className="success-content">
        <img src={doneIcon} alt="Done icon" />
        <h2 className="success-message">{message}</h2>
        <p className="success-description">{description}</p>
        <Link to={to}>{buttonText}</Link>
      </div>

      <img src={successBgImg} alt="" />
    </div>
  )
}

SuccessScreen.propTypes = {
  message: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default SuccessScreen
