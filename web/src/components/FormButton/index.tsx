import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface IFormButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  deactivated?: boolean
}

const FormButton: React.FC<IFormButton> = ({ text, deactivated }) => {
  return (
    <button
      type="submit"
      className={
        deactivated
          ? 'form-submit-button-inactive'
          : 'form-submit-button-inactive form-submit-button-active'
      }
    >
      {text}
    </button>
  )
}

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
  deactivated: PropTypes.bool
}

export default FormButton
