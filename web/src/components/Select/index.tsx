import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma Opção
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.defaultProps = {
  options: [
    {
      value: '1',
      label: ''
    }
  ]
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Select
