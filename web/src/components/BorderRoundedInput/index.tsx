import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface IBorderRoundedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder: string
  isLastInput?: boolean
  name: string
}

const BorderRoundedInput: React.FC<IBorderRoundedInputProps> = ({
  type = 'text',
  placeholder,
  name,
  isLastInput,
  children,
  ...rest
}) => {
  return (
    <div className="rounded-input-block">
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        {...rest}
      />
    </div>
  )
}

BorderRoundedInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isLastInput: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default BorderRoundedInput
