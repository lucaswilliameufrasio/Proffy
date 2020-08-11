import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import presentationBgBannerImg from '../../assets/images/presentation-banner-background.svg'

import './styles.css'

const SideBanner: React.FC = () => {
  return (
    <div className="side-banner">
      <div className="side-banner-content">
        <img src={logoImg} alt="Proffys logo" />
        <h2 className="side-banner-quote">Sua plataforma de estudos online.</h2>
      </div>

      <img src={presentationBgBannerImg} alt="Presentation Banner" />
    </div>
  )
}

export default SideBanner
