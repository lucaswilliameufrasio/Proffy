import React from 'react'
import PropTypes from 'prop-types'

import showPasswordIcon from '../../assets/images/icons/show-password.svg'
import hidePasswordIcon from '../../assets/images/icons/hide-password.svg'

import './styles.css'

interface IHideShowPassButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  show: boolean
}

const HideShowPassButton: React.FC<IHideShowPassButton> = ({
  show,
  ...rest
}) => {
  return (
    <button type="button" className="stacked-input-inner-button" {...rest}>
      <img
        src={show ? hidePasswordIcon : showPasswordIcon}
        alt="Show password"
      />
    </button>
  )
}

HideShowPassButton.propTypes = {
  show: PropTypes.bool.isRequired
}

export default HideShowPassButton
