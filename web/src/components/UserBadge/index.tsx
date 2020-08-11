import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.css'

interface IUserBadge extends React.ImgHTMLAttributes<HTMLImageElement> {
  source: string
  alt?: string
  name: string
}

const UserBadge: React.FC<IUserBadge> = ({
  source,
  alt = 'Profile user photo',
  name
}) => {
  return (
    <div className="user-container">
      <Link to="/profile">
        <img src={source} alt={alt} />
        <span>{name}</span>
      </Link>
    </div>
  )
}

UserBadge.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default UserBadge
