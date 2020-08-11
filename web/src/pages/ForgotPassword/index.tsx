import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import SideBanner from '../../components/SideBanner'
import SuccessScreen from '../../components/SuccessScreen'
import RoundedInput from '../../components/BorderRoundedInput'

import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

const ForgotPassword: React.FC = () => {
  const [success, setSuccess] = useState(false)

  async function handleSubmit() {
    setSuccess(true)
  }

  if (success) {
    return (
      <SuccessScreen
        message="Redefinição enviada!"
        description="Boa, agora é só checar o e-mail que foi enviado para você
        redefinir sua senha e aproveitar os estudos."
        to="/"
        buttonText="Voltar ao login"
      />
    )
  }

  return (
    <div className="forgot-password-container">
      <Link to="/">
        <img src={backIcon} alt="Voltar para página inicial" />
      </Link>
      <div className="forgot-password-form-container">
        <div className="forgot-password-inner-form-container">
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <h2>Eita, esqueceu sua senha?</h2>
            <span>Não esquenta, vamos dar um jeito nisso.</span>
            <RoundedInput placeholder="E-mail" name="email" />

            <button
              type="submit"
              className="forgot-password-form-submit-button-inactive"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <SideBanner />
    </div>
  )
}

export default ForgotPassword
