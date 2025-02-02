import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/CustomButton/CustomButton'

import './Login.scss'
import logo from '../assets/images/logoTasksIzabela.svg'

const Login = () => {
  const navigate = useNavigate()

  const handleSiginClick = () => {
    navigate('/')
  }

  return (
        <div className="login-container">
            <img src={logo} alt="Logo Izabela Task" />
            <div className="button-container">
                <CustomButton onClick={handleSiginClick}>
                    Entrar
                </CustomButton>
            </div>
        </div>
  )
}

export default Login
