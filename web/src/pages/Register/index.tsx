import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FormButton from '../../components/FormButton'
import HideShowPassButton from '../../components/HideShowPassButton'
import SideBanner from '../../components/SideBanner'
import StackedInput from '../../components/StackedInput'
import SuccessScreen from '../../components/SuccessScreen'

import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

const Register: React.FC = () => {
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  async function handleSubmit() {
    setSuccess(true)
  }

  function handlePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  if (success) {
    return (
      <SuccessScreen
        message="Cadastro concluído"
        description="Agora você faz parte da plataforma da Proffy.
    Tenha uma ótima experiência."
        to="/"
        buttonText="Fazer login"
      />
    )
  }

  return (
    <div className="register-container">
      <Link to="/">
        <img src={backIcon} alt="Voltar para página inicial" />
      </Link>
      <div className="register-form-container">
        <div className="register-inner-form-container">
          <form onSubmit={handleSubmit} className="register-form">
            <h2>Cadastro</h2>
            <span>Preencha os dados abaixo para começar.</span>
            <StackedInput placeholder="Nome" name="name" />
            <StackedInput placeholder="Sobrenome" name="surname" />
            <StackedInput placeholder="E-mail" name="email" />
            <StackedInput
              type={showPassword ? 'text' : 'password'}
              isLastInput
              placeholder="Senha"
              name="password"
            >
              <HideShowPassButton
                onClick={handlePasswordVisibility}
                show={showPassword}
              />
            </StackedInput>

            {/* <button type="submit" className="register-form-submit-button">
              Concluir cadastro
            </button> */}
            <FormButton text="Concluir cadastro" deactivated={false} />
          </form>
        </div>
      </div>
      <SideBanner />
    </div>
  )
}

export default Register
