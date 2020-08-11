import React from 'react'

import showPasswordIcon from '../../assets/images/icons/show-password.svg'

import './styles.css'

const HideShowPassButton: React.FC = () => {
  return (
    <button className="stacked-input-inner-button">
      <img src={showPasswordIcon} alt="Show password" />
    </button>
  )
}

export default HideShowPassButton
