import React from 'react'
import PropTypes from 'prop-types'

import './styles.css';

interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

const Textarea: React.FC<ITextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  )
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Textarea
