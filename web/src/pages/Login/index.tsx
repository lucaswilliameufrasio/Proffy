import React from 'react'
import { Link } from 'react-router-dom'

import StackedInput from '../../components/StackedInput'

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import SideBanner from '../../components/SideBanner'
import HideShowPassButton from '../../components/HideShowPassButton'

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <SideBanner />

      <div className="login-form-container">
        <div className="login-inner-form-container">
          <div className="login-form">
            <h2>Fazer login</h2>
            <StackedInput placeholder="E-mail" name="email" />
            <StackedInput
              type="password"
              isLastInput
              placeholder="Senha"
              name="password"
            >
              <HideShowPassButton />
            </StackedInput>

            <div className="login-form-actions">
              <div className="login-form-action-group">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Lembrar-me</label>

                <Link to="/login">Esqueci minha senha</Link>
              </div>

              <button
                type="submit"
                className="login-form-submit-button-inactive"
              >
                Entrar
              </button>
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
