import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FormButton from '../../components/FormButton'
import HideShowPassButton from '../../components/HideShowPassButton'
import StackedInput from '../../components/StackedInput'
import SideBanner from '../../components/SideBanner'

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  function handlePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  return (
    <div className="login-container">
      <SideBanner />

      <div className="login-form-container">
        <div className="login-inner-form-container">
          <div className="login-form">
            <h2>Fazer login</h2>
            <StackedInput placeholder="E-mail" name="email" />
            <StackedInput
              type={showPassword ? 'text' : 'password'}
              isLastInput
              placeholder="Senha"
              name="password"
              autoComplete="off"
            >
              <HideShowPassButton
                onClick={handlePasswordVisibility}
                show={showPassword}
              />
            </StackedInput>

            <div className="login-form-actions">
              <div className="login-form-action-group">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Lembrar-me</label>

                <Link to="/forgot-password">Esqueci minha senha</Link>
              </div>

              <FormButton text="Entrar" deactivated={true} />
            </div>
          </div>
        </div>

        <div className="not-registered-container">
          <div className="not-registered-button">
            <span>Não tem conta?</span>
            <Link to="/register">Cadastre-se agora</Link>
          </div>

          <span className="free-registration">
            É de graça <img src={purpleHeartIcon} alt="Coração roxo" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
