import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// import { startLogin } from '../../store/slices/auth'

export default function Signin() {
  /*const dispatch = useDispatch()
  const { token, authorization } = useSelector(state => state.authState)
  const navigate = useNavigate()
  const [passwordValid, setPasswordValid] = useState('')
  const [viewPassword, setViewPassword] = useState(false)

  const [formValues, handleInputChange] = useForm({
    username: '',
    password: '',
  })

  const { username, password } = formValues

  const handleLogin = e => {
    e.preventDefault()
    dispatch(startLogin(username, password))
  }*/

  return (
    <>
      <h2>Iniciar Sesión</h2>
    </>
  )
}
