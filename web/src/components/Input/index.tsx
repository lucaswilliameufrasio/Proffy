import React from 'react'
import PropTypes from 'prop-types'

import './styles.css';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const Input: React.FC<IInputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Input
