import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface IStackedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder: string
  isLastInput?: boolean
  name: string
}

const StackedInput: React.FC<IStackedInputProps> = ({
  type = 'text',
  placeholder,
  name,
  isLastInput,
  children,
  ...rest
}) => {
  return (
    <div className="stacked-input-block">
      <input
        className={isLastInput ? 'last-input' : ''}
        type={type}
        placeholder={placeholder}
        id={name}
        {...rest}
      />

      {children}
    </div>
  )
}

StackedInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isLastInput: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default StackedInput
